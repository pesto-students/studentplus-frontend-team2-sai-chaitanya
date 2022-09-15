![logoWhite](https://user-images.githubusercontent.com/16851407/190343506-79cde9ec-656f-400b-954e-bc188c575153.png)

> StudentPlus is a platform to assist Plus program students to learn, collaborate and access the program content in centralized way. The platform provides tools for program manager and moderators(mentors) to assess and support the program students.

## clone or download and install dependencies
```terminal
$ git clone https://github.com/pesto-students/studentplus-monorepo-team2-sai-chaitanya.git
$ cd studentplus-monorepo-team2-sai-chaitanya   // go to root folder
$ npm i or npm install       // npm install packages
$ npm i nx     // install nx to run nx commands
```

# Usage ()

## There are three client side apps:
- Student
- Manager
- Admin

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 4200)

## Server-side usage(PORT: 3000)

### Start Client( Student/Manager/Admin ) one at a time as all three apps works on port :4200

```terminal
$ npx nx run sp-student:serve
$ npx nx run sp-manager:serve
$ npx nx run sp-admin:serve
```

### Start Server

```terminal
$ npx nx run sp-backend:serve
```

And you are good to go....
See it working on 
http://localhost:4200/

### Credentials 
Student : tushar@gm.com
Password : 8K29fAv5@987

Manager : zehen@gm.com 
Password: 8K29fAv5@987
