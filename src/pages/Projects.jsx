import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/Projects/ProjectCard';
import Particle from '../components/Particle';
import telegrambot from '../assets/projects/telegam.jpg';
import hotel from '../assets/projects/hotel.png';
//update
const Projects = () => {
   return (
      <Container
         fluid
         className='project-section'>
         <Particle />
         <Container>
            <h1 className='project-heading'>
               Recent Top <strong className='yellow'>Works </strong>
            </h1>
            <p style={{ color: 'white' }}>
               Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
               <Col
                  md={4}
                  className='project-card'>
                  <ProjectCard
                     imgPath={telegrambot}
                     isBlog={false}
                     title='Telegram ChatBot'
                     description='This is a project that uses Telegram bot and Nodejs to manage notifications from my CRM, this project allows using multiple bots at the same time and independently of each other to do different tasks, for example sending notifications about new jobs, send notifications of new comments, send notifications when errors occur,....'
                     ghLink='https://github.com/nguyenduykhanghuflit/Telegram-chat-bot'
                  />
               </Col>

               <Col
                  md={4}
                  className='project-card'>
                  <ProjectCard
                     imgPath={
                        'https://private-user-images.githubusercontent.com/76279360/243282093-5d80dfe8-e66f-4f33-9dbf-474053da0488.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDgyNTEzNDcsIm5iZiI6MTcwODI1MTA0NywicGF0aCI6Ii83NjI3OTM2MC8yNDMyODIwOTMtNWQ4MGRmZTgtZTY2Zi00ZjMzLTlkYmYtNDc0MDUzZGEwNDg4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjE4VDEwMTA0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2ZDUzOWVjZmFmNmUxNTFmYWMyOGUzODNiZDVkZTIyZjcwNzE5ZjU5ZjVhN2FmZTM4MDc0M2I1YTYxYWRlYjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.QBzlk_vZSEyvxNYKMIeycfpLlOh7Ct_e27aul_wJpgs'
                     }
                     isBlog={false}
                     title='Food review app'
                     description='Building an application using Flutter to review eating places, the application allows users to search for places by name, by address, allows user registration to create articles to review a place that, allows for location from google map, uploading multiple photos at the same time , commenting on an article and other utilities.'
                     ghLink='https://github.com/nguyenduykhanghuflit/flutter_tasty_app_v2'
                  />
               </Col>

               <Col
                  md={4}
                  className='project-card'>
                  <ProjectCard
                     imgPath={
                        'https://user-images.githubusercontent.com/87811387/178153848-edfc48c2-3e1b-4af9-95e4-97946beefc5c.png'
                     }
                     isBlog={false}
                     title='E‑Commerce Website'
                     description='This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database.'
                     ghLink='https://github.com/longshaww/ClothesWeb'
                  />
               </Col>

               <Col
                  md={4}
                  className='project-card'>
                  <ProjectCard
                     imgPath={
                        'https://user-images.githubusercontent.com/87811387/174739179-ca53d5db-0dfa-4476-ac46-ec325300375c.png'
                     }
                     isBlog={false}
                     title='eCommerceWeb-ASP.NET-MVC'
                     description='Build eComemerce website use ASP.NET MVC, Boostrap, jQuery, SQL Server, Design Pattern. Main functions: search for products, view by category, sort and classify products, view product details, add to cart, increase quantity, register and log in, order without an account account, admin page to manage products, categories, orders, approve orders, manage users,....'
                     ghLink='https://github.com/nguyenduykhanghuflit/eCommerceWeb-ASP.NET-MVC'
                  />
               </Col>

               <Col
                  md={4}
                  className='project-card'>
                  <ProjectCard
                     imgPath={hotel}
                     isBlog={false}
                     title=' Manage hotel reservations and airline tickets'
                     description='Build a system using NodeJS & ExpressJs, MySQL to manage hotel reservations, and airline ticket bookings, functions include searching for rooms, viewing details, booking rooms, logging in and registering, finding airline tickets fly by origin and destination, by time by airport, allow booking tickets without logging in, send email to book fellowship, allow cancellation. Admin page with ticket and room management functions, ticket and room booking management, allows browsing tickets and booking forms,...'
                     ghLink='https://github.com/19sajib/Project-Krypto-Web-3.0'
                     //  demoLink='https://project-krypto.netlify.app/'
                  />
               </Col>
            </Row>
         </Container>
      </Container>
   );
};

export default Projects;
