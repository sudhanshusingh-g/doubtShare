﻿# DoubtShare
Real-Time Doubt Solving Platform
an interactive real-time doubt solving platform designed to assist students with their academic queries. 

# Product Features:
- Users can log in or register as
    - Students
    - Tutors
- Students have class grade, language
- Students can create doubt requests of allowed doubt subject types
- Tutors have allowed doubt subject types, class grade and language that they teach
- When a student creates a doubt request, the system finds all the online tutors who match the student's class grade, language, and doubt subject.
- All eligible tutors are notified in real-time about the doubt request. The first tutor who accepts the - request gets connected with the student for a chat consultation, explaining the topics.
- If no tutor accepts the request or is online, relevant feedback is provided to the student.
- Students can view their doubt history (logs) on the platform for reference.

# Tasks:
Based on the above description, implement -

## User Registration/Login Interface and API:
- Design a user-friendly registration/login interface for both Students and Tutors.
- Include necessary fields such as name, email, password, etc.
- Implement APIs for user registration/login with Authentication (Token Based)

## User Dashboard Interface:
- Create an intuitive dashboard for Students with easy navigation.
- Display essential information like ongoing sessions, doubt history, etc.

## Doubt History Interface and API:
- Create a section for students to view and manage their doubt history.
- Implement APIs to retrieve and display doubt history for students.
- Include options for sorting and filtering.

## Doubt Creation Interface and API:
- Design a simple doubt creation form for students with options for doubt subject types. Ensure clarity in the form for a seamless doubt creation process.
- Develop an API endpoint for students to create doubt requests.


# Tech Stack
- React
- NodeJS
- Mongodb
