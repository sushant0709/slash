<p align="center"><img width="500" src="./assets/slash.png"></p>



![GitHub](https://img.shields.io/github/license/sushant0709/slash)
![github workflow](https://github.com/secheaper/cheaper/actions/workflows/python-app.yml/badge.svg)
[![DOI](https://zenodo.org/badge/431326985.svg)](https://zenodo.org/badge/latestdoi/431326985)
![Github](https://img.shields.io/badge/language-python-red.svg)
![Github](https://img.shields.io/badge/language-node-red.svg)
![GitHub issues](https://img.shields.io/github/issues/sushant0709/slash)
![GitHub closed issues](https://img.shields.io/github/issues-closed/sushant0709/slash)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sushant0709/slash)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/sushant0709/slash)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/sushant0709/slash/main)
![GitHub repo size](https://img.shields.io/github/repo-size/sushant0709/slash)
[![codecov](https://codecov.io/gh/ChaitanyaS182k/Slash/graph/badge.svg?token=4Y0UH6WSDZ)](https://codecov.io/gh/ChaitanyaS182k/Slash)

On the hunt for incredible online deals? Meet Slash, your savvy shopping sidekick!

Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include [Amazon](https://www.amazon.com/), [Walmart](https://www.walmart.com/), [Target](https://www.target.com/), [BestBuy](https://www.bestbuy.com/), [Costco](https://www.costco.com/), [EBay](https://www.ebay.com/) and [The Home Depot](https://www.homedepot.com/).

- **Efficient**: Slash streamlines the deal comparison process, potentially saving you more than 50% of your valuable time.
- **User-Friendly**: Slash offers user-friendly public APIs for effortlessly filtering, sorting, and searching through search results.
- **Versatile**: It generates JSON responses that you can easily tailor to achieve the specific outcomes you want.

## :fire: **Rubrics and video link present in Project 3 Rubrics folder in Project 3.md file**

---

## :rocket: What's new? 
We have added a lot of new features to slash in our Phase-II.

1. A modified and beautiful web interface for users to interact with the application in a more personalised way.
2. Mobile application for users to use the application on their mobile devices.
3. Hosted the webpage publicly so everyone can access the application
4. Created a Google authentication for logging in the application, making it easier and smoother to login to the application.

## :page_facing_up: Why

1. **Mobile Application**
   -  Many popular websites, including Amazon and Walmart have their own mobile application which makes it easy for users to access the application from anywhere and increases accessibility.

2. **Publicly hosted webpage**
   - For every user in the world to access and use this application, we have hosted this web application publicly which can be accessed using an URL. This helps the application to reach all the users via the Internet and thus many users will be able to use this application.

3. **Google Authentication**
   - **Benefit**: Google Authentication delivers a safe and trusted way to login to the application. Since almost every user now has a google account, they can login to the application via Google Authentication and Google authentication being secure gives an added advantage over any other authentication methods.

These changes have significantly improved the reliability and accessibility of this application.

Future possibilities encompass the development of web applications with intuitive interfaces and mobile applications for Android and iOS, all powered by these web APIs. Anyone can construct their custom applications atop this foundation of web APIs.".

---

<p align="center">
  <a href="#movie_camera-checkout-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#file_cabinet-api">APIs used in the Project</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
  ::
  <a href="#email-support">Support</a>

</p>

---

## :movie_camera: Checkout our video
https://github.com/NCSU-Group70-CSC505-SE-Fall-23/slash/assets/70905787/fe229f61-2bec-4920-96f4-6b693a468bcf




---

## : Requirements
1. [Visual Studio Code](https://code.visualstudio.com/download)
2. [Python 3.7 and above](https://www.python.org/downloads/)
3. [Node.js](https://nodejs.dev/en/download/) and NPM

## :rocket: Installation

1. Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/secheaper/slash.git
cd slash
```

2. This project uses Python 3 for the backend and React along with Javascript framework for the frontend. This project employs MySQL Workbench to authenticate the users hitting on the frontend.

For the backend setup ensure that [Python](https://www.python.org/downloads/) and [Pip](https://pip.pypa.io/en/stable/installation/) are preinstalled. All the python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```

For the frontend setup ensure that [Node](https://nodejs.org/en/) is preinstalled. All the node requirements are listed in `client/package.json` file. Use npm to install all of those.

```
cd client
npm install --legacy-peer-deps
```


3. Once all the requirements are installed, you will have to `cd` into the `src` folder. Once in the `src` folder, use the python command to run the `main.py` file.

```
cd src

For Mac
python3 main.py

For Windows
python main.py
```

4. Once the backend is up and running, you will have to `cd` into the `GoogleauthLogin` folder. Once in the `GoogleauthLogin` folder, cd to 'client' folder. Use the node command to run the build and then start the webserver.

```
npm run build

npm run start

```


## :computer: Technology Used

- FastAPI : https://fastapi.tiangolo.com
- ASGI Server - Uvicorn : https://www.uvicorn.org
- Flutter : https://flutter.dev/


## :bulb: Use Case

- **_Students_**: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Make the most of this tool in the upcoming Black Friday Sale.
- **_Data Analysts_**: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.

## :file_cabinet: API

Here are the APIs used in our project:

- **Amazon**: [Amazon API Documentation](https://www.rainforestapi.com/)

- **Walmart**: [Walmart API Documentation](https://www.bluecartapi.com/walmart-product-data-api)

- **Target**: [Target API Documentation](https://www.redcircleapi.com/target-product-data-api)

- **The Home Depot**: [The Home Depot API Documentation](https://www.bigboxapi.com/)

- **Ebay**: We used the Ebay SDK, which can be found in the project's requirements. Please refer to the SDK's official documentation for more information.

  - **Ebay SDK Documentation**: [Ebay SDK Documentation](https://developer.ebay.com/support/kb-article?KBid=84)

Please refer to these API documentation links for details on how to use them in our project.

## :golf: Future Roadmap

- Add more websites to the application and ensure smooth integration with the newly added websites.
- Make user profiles to store user history to provide features like bookmarking, price drop alerts and many more.
- Our API can be used by end users such as developers who are tech-savvy individuals looking to get a one stop solution for web scraping ecommerce websites such as Amazon, Target, Ebay,etc along with API access to multiple ecommerce websites. It'll be available directly for access to people without having to dive deep into the code.
- In the future, there can be a functionality added which will support in-app or on the website purchases.

# Team Members

## Phase 2 Team Members

- Anshul Anil Khairnar
- Sushant Khattar
- Parth Kulkarni

## :email: Support

For any queries and help, please reach out to us at: anshul5khairnar@gmail.com
