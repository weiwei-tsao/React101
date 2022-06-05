import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setJobs(data);
      console.log(data);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const clickHandler = (idx) => {
    setValue(idx);

    const btns = [...document.querySelectorAll('.job-btn')];

    btns.forEach((btn) => {
      if (btn.classList.contains('active-btn')) {
        btn.classList.remove('active-btn');
        btn.classList.add('false');
      }
    });

    btns[idx].classList.add('active-btn');

  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        loading...
      </section>
    )
  }

  // 关键一步，并不需要在后面的步骤中去判断index，因为此时已经获取到了数据
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* button container */}
        <div className="btn-container">
          {
            jobs.map((job, idx) => {
              // let styling = "job-btn ";

              // if (idx === value) {
              //   styling += "active-btn";
              // } else {
              //   styling += "false";
              // }

              // return <button className={styling} key={job.id} onClick={() => clickHandler(idx)}>{job.company}</button>
              return (
                <button
                  className={`job-btn ${idx === value && 'active-btn'}`}
                  key={job.id}
                  onClick={() => clickHandler(idx)}
                >
                  {job.company}
                </button>
              );
            })
          }
        </div>
        {/* job info */}
        {/* {
          jobs.map((job, idx) => {

            if (idx === value) {
              return (
                <article className="job-info" key={job.id}>
                  <h3>{job.title}</h3>
                  <h4>{job.company}</h4>
                  <p className="job-date">{job.dates}</p>

                  {
                    job.duties.map((duty, index) => {
                      return (
                        <div className="job-desc" key={index}>
                          <FaAngleDoubleRight>
                          </FaAngleDoubleRight>
                          <p>{duty}</p>
                        </div>
                      );
                    })
                  }
                </article>

              );
            }
          })
        } */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {
            duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight>
                  </FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })
          }
        </article>
      </div>
      <button type="button" className="btn">more info</button>
    </section>
  )
}

export default App
