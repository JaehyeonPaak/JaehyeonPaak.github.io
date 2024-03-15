import React from 'react'
import Layout from '../components/layout';
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout pageTitle='About Author' pageType='about'>
        <div>
          <h3>Hi! I'm Jaehyeon Park</h3>
          <p>2년차 프론트엔드 개발자입니다. 
            병역 특례(정보처리 산업기능요원) 제도를 통해 개발자 커리어를 처음 시작했고 중소기업 두군데에서 풀스택 및 프론트엔드 개발에 대한 실무능력 및 전문성을 쌓았습니다.</p>
        </div>
        <div>
          <h3>Experience</h3>
          <p>Poly Cube</p>
          <p>2023-12 ~ now</p>
          <p>천만명 이상의 사용자를 보유한 OK 캐쉬백 애플리케이션에서 웹뷰 기반의 이벤트 배너를 담당했습니다. HTML, CSS, JavaScript, Preact</p>
          <p>Nexol System</p>
          <p>2022-10 ~ 2023-12</p>
          <p>샘소나이트 전국 500개 매장에서 사용하는 웹 기반의 EPOS 시스템 개발 및 유지보수를 담당했습니다. Java, HTML, CSS, JavaScript</p>
        </div>
        <div>
          <h3>Education</h3>
          <p>Computer Science</p>
          <p>2021-02 ~ now</p>
          <p>Stony Brook University</p>
        </div>
        <div>
          <h3>Projects</h3>
          <p>Paak's Tech Blog</p>
          <p>Footprint</p>  
        </div>
        <div>
          <h3>Certificate</h3>
          <p>SQLD (SQL Developer)</p>
        </div>
    </Layout>
  )
}
export const Head = () => <Seo title="About" />

export default AboutPage;