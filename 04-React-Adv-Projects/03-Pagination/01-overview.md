# Pagination

## custom hooks

```javascript
import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = paginate(data);

    setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data };
};
```

## loading data and useEffect

```javascript
useEffect(() => {
  // check loading, initially the data is empty
  if (loading) return;

  setFollowers(data[page]);
  // dependencies
}, [loading, page]);
```

## pagination workflow

- set items per page and get total numbers of pages
- build an array containing each page items using `slice()` and `Array.from()`

```javascript
const paginate = (followers) => {
  const itemsPerPage = 5;
  const numOfPages = Math.ceil(followers.length / itemsPerPage);

  // length: 10 => create a new array containing 10 elements, starting from 0, 1, 2, ... to 9
  // for each element, it is a slice of the followers array
  const newFollowers = Array.from({ length: numOfPages }, (_, index) => {
    // each page's start index
    const start = index * itemsPerPage;
    // slice the original array
    return followers.slice(start, start + itemsPerPage);
  });

  // console.log(newFollowers);
  return newFollowers;
};

export default paginate;
```
