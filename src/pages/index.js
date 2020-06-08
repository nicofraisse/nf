import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"
import Intro from './intro.js'
import Code from './code.js'
import Photography from './photography.js'
import About from './about.js'
import Contact from './contact.js'
import ReactTooltip from "react-tooltip";

export default () =>

  <Main>
    <Intro />
    <Code />
    <div>
      <br/>
      <Container>
        <h2 style={{margin: '100px auto 72px auto'}}>Photography</h2>
        <Photography />
      </Container>
      <br/>
    </div>
      <br/>
    <br/>
    <About />
    <Contact />

  </Main>
