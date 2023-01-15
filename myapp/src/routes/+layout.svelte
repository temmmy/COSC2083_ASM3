<script>
    import "@fontsource/nunito";
    import "../app.css";
    import {isOverlayOpen, Noverlay} from "../stores/OverlayStore"
    import Overlay from "../components/Overlay.svelte"
</script>

{#if $isOverlayOpen}
  <Overlay>
    {#if Noverlay.n == 1}
      <p class="text-white font-bold text-5xl mb-10">Topic</p>
      <p class="text-white text-xl">The simulation of human intelligence processes by machines, particularly computer systems, is known as Artificial Intelligence (AI). This disruptive technology significantly shifts the economy all over the world. The combination of AI and other fields has enormous potential for developing new business models made possible by digitization. Even despite the fact that the powers of the human mind are endless, they still can be modeled and even improved upon by machines thanks to artificial intelligence. 
        That’s why more and more companies and corporations are starting to actively utilize Artificial Intelligence to reach new heights.<br><br> For instance, one of the key advantages of integrating AI into business is increased efficiency. By automating routine tasks and streamlining processes, businesses can free up time and resources that can be better spent on other tasks. AI can also help businesses to make better, more informed decisions by providing insights and analysis that would be difficult or impossible for humans to produce on their own. This can be particularly valuable for companies that rely on large amounts of data to make strategic decisions.. On the other hand, the application of AI in e-commerce can be evident in personalization as a service, product recommendations and purchase predictions, fraud detection, and prevention of online transactions. It’s also widely spread in the marketing area: for example, personalization of news feeds, ad targeting and optimization, and language recognition.<br><br> Our team decided to make a Sales Forecaster using Machine Learning  to show the power of AI in the commercial sphere in the hands of only 1st year students. Even though its impact on our lives is already invaluable and, in some cases, irreplaceable, AI as a field still has so much potential that researchers themselves are not confident about what artificial intelligence means for the future of business and how many breakthroughs and innovations it has yet to bring. </p>
    {:else if Noverlay.n == 2}
      <p class="text-white font-bold text-5xl mb-10">Motivation</p>
      <p class="text-white text-xl">According to IBM's latest report for 2022 (the IBM global AI adoption index for 2022), only more than a third of companies (35%) reported using AI in their businesses. One of the reasons is apprehension about AI among businesses; they are worried that AI will process false information or cause leakage of customer information. With this in mind, our group's first motivation was just to create and build an AI-related project that could encourage more and more companies to trust and start applying AI in their processes. Something else also motivated us to embark on this project: to prove the value that AI brings to the economy, to improve customer experience, and last but not least, to immerse ourselves in the new world of technology and fulfill our curiosity about this new field. <br><br> We discussed various ideas related to the topic, from making a chatbot for customers to creating a virtual assistant controlled by voice, but in the end we decided to build a machine learning program that is able to forecast sales and predict future marketing behavior. Reports by Statista.com showed that the AI market is rapidly expanding, with a projected global market size of $327.5 billion in 2021 and expected to double in the next three years. It is clear how popular AI is now and will be in the future, as well as how the project fits into the IT trend. As the creators of this sales prediction AI, I hope that when future employers see our work, they will admire our creativity, work ethics, vision, and IT knowledge.
      </p>
    {:else if Noverlay.n == 3}
      <p class="text-white font-bold text-5xl mb-10">Landscape</p>
      <p class="text-white text-xl">We believe this kind of work is done every day by professional data scientists working in companies. Furthermore, they take on much more complex and challenging tasks. But specifically for our dataset (BigMart Sales Data from Kaggle) we felt that provided products/solutions were a little bit underwhelming in terms of explanations and descriptions, so it was hard to understand the thought process behind each of their action (by no means we intend to offend creators of other notebooks, because they certainly have much more experience and knowledge than us and above all, what took us about 2 months to do, they did it in hours at worst). Our final product should be more refined, but still very similar to competitors (codewise).
      </p>
    {:else if Noverlay.n == 4}
      <p class="text-white font-bold text-5xl mb-10">Aims</p>
      <p class="text-white text-xl">Our ultimate aim is to demonstrate the potential of Artificial Intelligence in providing business benefits and solutions. To achieve this goal, our team will undergo a bootcamp (Data Science Course) to gain the necessary knowledge and skills in AI, and apply this knowledge to a specific business in the form of a three-month project focused on Sales Forecasting using Machine Learning. The project will be designed to be flexible in terms of technologies, libraries and frameworks, to allow for adaptability in case of any unexpected difficulties.
        We expect the final product to provide predictions for future sales with high accuracy, greater than 60%. Additionally, the project will aim to identify potential profitable solutions, such as identifying key drivers of sales and identifying trends in the market, and demonstrate the efficiency and advantages of using AI-based predictions over more traditional manual methods. By successfully showcasing these benefits, we hope to persuade companies and corporations to consider implementing AI in their own operations. In order to achieve this goal, we will be gathering and analyzing large amounts of data from the business, using techniques such as data cleaning, feature engineering, and data visualization to ensure the quality of the predictions. We will also be using advanced techniques such as machine learning and ensemble methods to improve the accuracy of the predictions.
        Furthermore, the project will not only be beneficial for the specific business we are working with, but it can also potentially provide valuable insights and knowledge that can be translated and applied to other businesses in the industry. It will also serve as a proof of concept for other companies who are considering implementing AI in their operations.
        In conclusion, the project will be a valuable opportunity to see the real-world application of AI and understand the potential benefits it can bring to businesses. It is our hope that by successfully demonstrating the potential of AI, we can encourage more companies to invest in and implement AI in their own operations, leading to increased efficiency and profitability in the long run.        
        </p>
    {:else if Noverlay.n == 5}
      <p class="text-white font-bold text-5xl mb-10">Plans</p>
      
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Week
                </th>
                <th scope="col" class="px-6 py-3">
                    Task
                </th>
                <th scope="col" class="px-6 py-3">
                    Member in charge
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-3xl text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                    1-2
                </th>
                <td class="px-6 py-4">
                    <li>Choose a specific subject that is both feasible and has good potential. 
                    </li>
                    <li>Assign duties to each team member and begin your research</li>
                    <li>Define the project's parameters, schedule, and various communication channels.</li>
                </td>
                <td class="px-6 py-4">
                  <li>Nhan</li>
                  <li>Nghia</li>
                  <li>Minh</li>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-3xl text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                  3-4
                </th>
                <td class="px-6 py-4">
                  <li>Make a title page,
                    Table of content. Write down an overview and contact details for project.
                    
                    </li>
                  <li>Analyze the early feedback and improve the proposal.</li>
                  <li>Provide risks and references. Finish up the design and send the project proposal to lecturer.</li>
                </td>
                <td class="px-6 py-4">
                  <li>Nhan</li>
                  <li>Nghia</li>
                  <li>Kiet & Minh</li>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-3xl text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                    5-6
                </th>
                <td class="px-6 py-4">
                  <li>Learn and explore data analyzing.</li>
                  <li>Learn and explore machine learning.</li>
                  <li>Investigate different sale forecasting tool on the market and insights of using AI</li>
                </td>
                <td class="px-6 py-4">
                  <li>Nhan</li>
                  <li>Nghia</li>
                  <li>Minh</li>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-3xl text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                  7-8
              </th>
              <td class="px-6 py-4">
                <li>Learn the basic of Git
                </li>
                <li>Learning the basic of GitHub
                </li>
                <li>Creating GitHub reposition for the group</li>
              </td>
              <td class="px-6 py-4">
                <li>Whole Team
                </li>
                <li>Whole Team
                </li>
                <li>Nghia</li>
              </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="px-6 py-4 font-3xl text-2xl text-gray-900 whitespace-nowrap dark:text-white">
                9-10
            </th>
            <td class="px-6 py-4">
              <li>Learn & Design website for the project</li>
              <li>Develop prototype for sale forecasting machine
              </li>
              <li>Working on group presentation slides</li>
              <li>Working on group report content to satisfy the lecturer requirements</li>
            </td>
            <td class="px-6 py-4">
              <li>Whole Team</li>
              <li>Nghia</li>
              <li>Whole Team</li>
              <li>Whole Team</li>
            </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th scope="row" class="px-6 py-4 font-3xl text-2xl text-gray-900 whitespace-nowrap dark:text-white">
              11-12
          </th>
          <td class="px-6 py-4">
            <li>Rehearse the presentation and present to the lecturer

            </li>
            <li>Finish up the design for the report
            </li>
            <li>Submit the report to Canvas</li>
          </td>
          <td class="px-6 py-4">
            <li>Whole Team</li>
            <li>Minh
            </li>
            <li>Nghia
            </li>
          </td>
      </tr>
        </tbody>
    </table>
    {:else if Noverlay.n == 6}
      <p class="text-white font-bold text-5xl mb-10">Progress</p> 
      <p class="text-white text-xl">Since the first SSET (School of Science, Engineering, and Technology) induction day, Nghia has already created a Discord server for future students and alumni to socialize, share advice, and network as they embark on their professional journeys. This is the first time we have had the opportunity to know one another, but just over the internet. To be honest, Nghia has already shown amazing leadership; his thoughtful ideas and positive influence have helped shape the SSET community into one that is vibrant, welcoming, and inspiring. Then we get to meet in person during the Introduction to Information Technology tutorial classes, where the teacher asks us about our own skills , goals, and working style. After listening to our answers , Nghia quickly suggested that each of us could find a way to make use of our own expertise, and he also encouraged us to form a group in order to collaborate on future projects and assessments. Our group consists of 4 members : Chi Nghia , Nhat Minh , Tuan Kiet, and Viet Nhan , each of whom has some prior experience in the information technology field, except for Nhan, who is planning to expand his career in biotechnology and decided to take this class to explore the IT world. Despite the short amount of time we have known each other, we have become fast friends and get along very well. Soon, we will exchange our ideas for the project both online via Messenger Chat and offline during tutorial classes.

        <br><br>At first, our initial talk did not go well, primarily because we were unable to express ourselves clearly. Our initial ideas for the project include: developing a chatbot for RMIT students; developing a healthcare system to improve student health; developing a tinder-like app for students to match and form groups based on their strengths and styles. Finally, Nghia's exceptional leadership skills enabled him to persuade the entire group to support his idea of combining artificial intelligence with business and developing a sales forecasting machine that would analyze the given data and accurately predict future sales.
        
        <br><br>It is now time to create a strategy for how we will execute our project after deciding on its concept. For this project, we have created a table to list our goals and developments over the course of the entire semester.
        </p>
    {:else if Noverlay.n == 7}
      <p class="text-white font-bold text-5xl mb-10">Roles</p>
      <p class="text-white text-xl">        <strong>Kiet</strong> - Web-Developer

        <br>Since we’re working with a project, it’s very important to assign roles to each member of the group. First of all, since this tt is obvious that there should be a Web-Designer and a Web-Developer for our tasks because they call for a website where we can display our work. Kiet was confident in his HTML/CSS/JavaScript + FrontEnd Web stack skills as he previously already had experience in that field, so he took the role of making a website upon himself. 
                  <br><br><strong>Nhan</strong> - Data Analyst
               When we first defined with roles and responsibilities, Nhan immediately                          took data analyst role because this job always excited him. Data analytics is a fast-paced, challenging career centered on problem-solving and thinking outside of the box. Interestingly, these features are important for a basketball player as well, who Nhan actually is. Not to mention, his contribution by insights into how we could improve our processes was invaluable.
                  <br><br><strong>Nghia</strong> - Project Leader; Machine Learning Developer
                  <br>Nghia was the one who started it all. Even though the project was unrealistically complex for first-year-students, with his leadership abilities we all managed to complete it on time. The Machine Learning part of the project was one of the hardest tasks, if not the one and still, Nghia gladly took it. 
                            <br><br><strong>Minh</strong> - Business Analyst
          Without Minh, we would be barking the wrong tree not knowing what application of AI to choose as our topic. Finding and Delivery of data, effective presentation, detailed report, analyses from the business viewpoint - just a fraction of his contribution to this project.
        </p>
    {:else if Noverlay.n == 8}
      <p class="text-white font-bold text-5xl mb-10">Scope and Limits</p>
      <p class="text-white text-xl"><strong>Description</strong>
        <br><br>Machine Learning Project on Sales Prediction. For our collaboration and specific purposes, the project is going to be done in a Google Colab Notebook using Python 3 as a main language. Google Colab allows you to combine executable code and rich text in a single document), where we will go through the whole Data Science Life Cycle (excl. Data Mining). All stages will be distributed equally to each member. And finally, the Dataset for this project was decided to be <strong><a href='https://www.kaggle.com/datasets/brijbhushannanda1979/bigmart-sales-data/code?datasetId=9961'>“BigMart Sales”</a></strong> from Kaggle. 
        <br><br><strong>Deliverables</strong>
            <li>1 Multifunctional Notebook that includes: </li>
            <li>Problem identification</li>
            <li>Business Understanding</li>
            <li>Pre-processing data</li>
            <li>Exploratory Data Analysis</li>
            <li>Model Building (where ML begins)</li>
            <li>Making a mini-prediction system</li>
            <li>Driving insights </li>
            <li>Taking a decision based on insights</li>
      </p>
    {:else if Noverlay.n == 9}
      <p class="text-white font-bold text-5xl mb-10">Tools and Technologies</p>
      <p class="text-white text-xl">All libraries and apps that we used for making this project 			and communication is free and publicly available. While all of us
        Has been using apps listed below for a long time, when it comes  
        To libraries and frameworks, none of us had a prior experience 
        Working with them.
    
        <br>It includes: 
    
        <br><br><strong>Google Colab</strong> - a web IDE for python that was released by Google in 2017. Colab is an excellent tool for data scientists to execute Machine Learning and Deep Learning projects with cloud storage capabilities.  This tool is the reason why our whole project was made possible. It provides an environment, computing power, and above all, allows collaboration between members.
    
        <br><strong>Notion</strong> - a note-taking software platform designed to help members of companies or organizations manage their knowledge for greater efficiency and productivity. Each member of the team used it for tracking milestones and deadlines. 
    
        <br><strong>Discord</strong> - VoIP and instant messaging social platform. It is our main way of communication due to its simplicity and popularity.
    
        <br><strong>Numpy</strong> - a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.
    
        <br><strong>Pandas</strong> - a software library written for the Python programming language for data manipulation and analysis
    
        <br><strong>Matplotlib</strong> - is a comprehensive library for creating static, animated, and interactive visualizations in Python
    
        <br><strong>Seaborn</strong> is a Python data visualization library based on matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.
    
        <br><strong>Plotly</strong> - graphing library makes interactive, publication-quality graphs 
    
        <br><strong>Scikit-learn</strong> - a free software machine learning library for the Python programming language (the most important library in our project)
    
        <br><strong>Svelte</strong> - a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members (Turned out to be actually unnecessary and made our website only more complex, though helped in making animations)
    
    Tailwind CSS - an open source CSS framework that helped us tremendously in building our website (more specifically, UI).</p>
    {:else if Noverlay.n == 10}
      <p class="text-white font-bold text-5xl mb-10">Testing</p>
      <p class="text-white text-xl">This phase’s success will be evaluated by using different evaluation metrics (like Coefficient of determination, MSE - Mean square error, MAE - Mean absolute error) that will show accuracy and other useful information. It is very important  to understand a machine learning model’s performance to be able to find strengths and weaknesses as well as its further development and improvement. We will consider we succeeded if our model will be able to reach >50% accuracy of predicted values because in business we believe any fluctuations around 50% can be a matter of whether the company is going to profit or vice versa decline. </p>
    {:else if Noverlay.n == 11}
      <p class="text-white font-bold text-5xl mb-10">Risks</p>
      <p class="text-white text-xl">In today’s world, companies and corporations are trying to apply artificial intelligence(AI) technologies in their business to, particularly, boost their overall revenue, profits and performance.
        While artificial intelligence has numerous fiscal benefits, there are several obstacles and downsides to be apprehensive of.
        One of the main barriers to the application of AI in business is the lack of data. Since data is frequently fragmented, inconsistent, and of poor quality, businesses wanting to profit at scale from AI confront challenges. We should have a clear plan in place from the start for acquiring the data, your AI will require in order to prevent this.
        Another significant barrier to the abandonment of AI is the dearth of specialists with the necessary grit and training to effectively implement and manage AI technologies. Investigation has revealed a shortage of trained data scientists and other specialized data workers skilled in machine literacy, building robust models, etc.
        When dealing with AI technologies, cost is still another crucial consideration. Businesses that need in-house moxie or are unfamiliar with AI are forced to outsource frequently, which creates issues with cost and retention. Due to their intricacy, smart technologies can be valuable. You can also avoid having to constantly conserve and fix them by using them instead. The computational expenses linked to structuring data models, etc., may also be included in the fresh costs.
        Software programs must continually be improved in order to adapt to the changing corporate landscape, and in the event of a malfunction, there is a risk of losing important legal or data. To fix this usually takes plutocracy and extensive struggle. The threat posed by AI is comparable to that posed by conventional software development, though. These troubles can be reduced if the system is well-designed and individualities copping AI are apprehensive of their requirements and available results.
        </p>
    {:else if Noverlay.n == 12}
      <p class="text-white font-bold text-5xl mb-10">Communication</p> 
      <p class="text-white text-xl">As a team we must communicate to reach our commonly shared goals. Our team hosts a group meeting at least twice a week, usually in the study room at the library, to discuss it in person. When it’s not possible to attend the meeting in person as each of our group members has a different schedule, that's when online messengers and video chat services come in to discuss our plan online. Establishing a communication method has never been easier with the help of new technologies such as online messengers, video conferences, and online schedulers, namely:
        <br><br>- Discord (For team conferences)
        <br><br>- Facebook Messenger (because verbal communications often lead to misunderstandings, written communications are always preferable)
        <br><br>- Notion (Scheduling plans and keeping track of our progress)
        <br><br>Our goals and objectives are also not set exclusively by the team leader. Every member of the group should have the freedom to speak and every idea should be discussed thoroughly, as they are very highly valued in a group project. The meeting starts off with reviewing what we have done thus far, suggesting new ideas to implement into our project and discussing our flaws and the most effective way to deal with them.
        Effective communication is the foundation of group success. A team's success is directly correlated with how well they communicate. 
        </p>
    {/if}
  </Overlay>
{/if}
<style>
    :global(body) {
      font-family: "Nunito", sans-serif;
    }
</style>
<slot />