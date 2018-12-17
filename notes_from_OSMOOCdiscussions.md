resources, similar projects: 
- https://channels.plos.org/open-source-toolkit
- https://gist.github.com/stared/9130888 (existing list)
- https://directory.fsf.org/wiki/Category/Science
- https://docs.google.com/spreadsheets/d/1pYjIPXbuObf3V3RXTQ7pJeYF73HI_5o1CCdPXJDtbX8/edit#gid=0)


## module 5 discussion: https://github.com/OpenScienceMOOC/Module-5-Open-Research-Software-and-Open-Source/issues/35



- rvosa commented on Aug 9
- There is very little about research software, and quite a lot about generic open source (understandable, because there is more material to borrow from). As examples of open source software, we name LibreOffice and FireFox, which don't make the case at all: most people use Microsoft Office and Chrome, and the alternatives seem like, well, alternatives. What we need to discuss here, I think, is actual open source software used in research, such as R and Rstudio, python tools, QGIS, basically all of the bioinformatics tools, etc. and point out the culture that surrounds them, where scientists develop tools and libraries, and publish them.
 👍 2
 
 
- Awesome, thanks @rvosa! You're totally right about this. I suggest adding in a section after 'Existing software' dedicated to this (https://github.com/OpenScienceMOOC/Module-5-Open-Research-Software-and-Open-Source/blob/master/content_development/MAIN.md#table-of-contents). We can perhaps focus on some generic ones, such as R and Python, and then delve into a few discipline specific ones, and try and cover a nice range there.
-  Have this now :) https://github.com/OpenScienceMOOC/Module-5-Open-Research-Software-and-Open-Source/blob/master/content_development/MAIN.md#Research

    - Wonder whether we could go for something like this. Thoughts?

    - I'm using X[e.g. Matlab,STATA,Excel] and I want to transition to something more open. What are the next steps?
Even if you are using proprietary software, you can usually still share your source code/documents etc. The best first step is sharing whatever you can.
Great! I can put them in my new github repo. If that's enough for you for now great! If not for most pieces of proprietary software there are Open Source equivalents. Have a go with one and see what you think.

| Closed | Open |
| --- | --- |
| Matlab | Python, Julia |
| STATA/SPSS | R |
| MS Office | Libre Office |
| etc... | etc... |

- Cool! But if I make the switch will I be stuck: taking ages to learn a new tool/ without support /with buggy software.
- Good question! The answer is it depends. The best thing to do is find someone who's made the switch before and learn from their experience. Or just do a google search! Some OSS is much better than their closed counterparts, some aren't, so it's worth choosing carefully.


- Or this: 2e1ba5c#diff-0f8e0b24775d666f702b75d530494cf9

- Cannot express how happy I am to see these contributions right now.. Thank you, @rvosa and @alexmorley! I'm sure there is a way to combine them both. I love Alex' idea of a sort of FAQ too.
 
 
- I like @alexmorley's suggestion but I think it would be quite an enterprise, and really dependent on the specific research field. For example, just for the most generic workflows of "next-generation" DNA sequencing analysis, there's like dozens of single-purpose open source utilities to choose from to do the basic data processing even before you're attempting anything interesting. I imagine this is true in many fields.
 
- Yes, this is true @rvosa - however, I don't think we need to be exhaustive in this respect. Provide some examples of cross-disciplinary software, and then a few well-known ones that are discipline specific. I think that will be enough to get people thinking about these things more. And we can add a simple statement like that others exist for other fields, and could be sought out where required.


- Would be interesting to have a third column stating where the guys who maintain/develop the tool get money from (firefox gets most of it from google, libreoffice gets it through donation (I think), Better gets it by selling an easy to install version of their open source software,…..)

- Should we start a google sheet ? (we can then use Rmd to create the up top date html file for the mooc).




- @jcolomb I don't know if that third column is really a good idea. I mean there's a difference between Mozilla Corporation and Mozilla Foundation.

    - Also, LibreOffice via the Document Foundation benefit from big corporation like Google, Intel and Amd. I mean every big free and open source projects receive money from big corporations.

    - Moreover, it could create bias in users choice. For example, if I want to avoid Google because I don't want to support corporations that don't respect online privacy doesn't that mean I should avoid Non-profit who receive money from Google.


- Here's a good matlab to Python guide. I'm not recommending an Enthought installation of Python (I use conda for package and environment management) but it's a short-ish document that might be helpful.

    - https://www.enthought.com/wp-content/uploads/Enthought-MATLAB-to-Python-White-Paper.pdf

- Since one of the objective is to understand the economy of open source software, these questions are relevant, a third column might not be the most effective way to deal with the question, though. Any other suggestion?

    - PS: I personally make no difference between for-profit and non-for-profit software companies. I would be more confident to use a product from a for profit company which states its objective and business model, than a non-profit whose income or product is dependent to companies I dislike/showed bad behaviour in the past (remember using software dependent on the google rss software !)


- Did we settle on a conclusion for this in the end? I think @alexmorley's idea of a little table, and the engaging Q&A text would be a perfect compliment to what @rvosa has already written.


- There's a PR now if people want to comment or make changes :)

     - I really like @jcolomb's idea but I think because the issue is far from simple I'd rather give it its own section (maybe or maybe not in the core material) or point to some detailed discussion than add a column in the table where it could add some confusion (at least it would for pea-brained folk such as myself!).


- I like the idea of @alexmorley table. I think it a great yet concise way to communicate the general idea.
-  This is awesome, thanks so much @alexmorley! Have a great weekend all, I think this is a nice way to round off the week :)
- Hey, sorry to reopen, but what about creating a curated list of OOS for researchers.
we could use this as a start (but put the information in a spreadsheet !): https://gist.github.com/stared/9130888
or is there another list @bmkramer ?

- (others are trying to build such lists, see: https://docs.google.com/spreadsheets/d/1pYjIPXbuObf3V3RXTQ7pJeYF73HI_5o1CCdPXJDtbX8/edit#gid=0)
- @jcolomb would you like something more interactive (e.g alternativeto.net). It should be easy to do with jekyll (or any static site generator).

     - Also have a look at https://directory.fsf.org/wiki/Category/Science. It's probably a bit outdated but it's a wiki so anyone can contribute to it.

# Module main discussion: https://github.com/OpenScienceMOOC/Module-5-Open-Research-Software-and-Open-Source/issues/35

- The French (Framasoft people and the like) have settled on just using Wikipedia, starting from: https://fr.wikipedia.org/wiki/Correspondance_entre_logiciels_libres_et_logiciels_propri%C3%A9taires

    - And of course there's https://directory.fsf.org/ (currently with a dedicated intern even).

- @nemobis I know both of this resource and I really appreciate the effort of everyone who contribute to them but we must admit:

    - The design is so awful both in term of esthetic and usability
    - Wiki's engines are a PITA to search software. Scrolling and clicking your way through a lot of pages is the kind of thing that keeps people on Windows and Mac.
    - There's no feedback from the community about the proposed alternative. I think that's something very important when you're not familiar with a new software. You want to know which apps in the list would probably be the best for your needs.
- I agree with @dannycolin 's suggested improvements. And I'd really like to build a "proper" database on which we can have a open API (to enable search, discovery, rating, review and contributions - and people to build other apps using it). AFAICT that's not available with these?

    - However I hadn't seen either of these on my searches so thanks a lot @nemobis for posting them here 😄 .

    - There's also https://www.osalt.com/ but I think it hasn't been updated in some years (or at least it's security certificate hasn't 😢)

- Also @nemobis do you know who the dedicated intern is? Can we tag him on here for discussion?

- Does anyone know where JROST stands atm? I just signed up with Africarxiv.
    - In a course I gave this week on digital tools for Science Project management I started plotting some tools here: https://github.com/access2perspectives/Science_Project_Management/issues
and would like to be able to display this in a database sorted by

    - open source versus commercial tools
        - legal aspects: intellectual property, data security, privacy
        - functionality: services covered by the tools, searchable as lists and multiple services tagged
        
    - Some of you might also know the page http://connectedresearchers.com/ - I am in talks with Thomas Cruzier how best to continue his efforts in a sustainable and potentially crowdsourced way.

    - Having such a database on both Github and Wikimedia might serve both communities and we can see which one proves ore vital over time

-  Also @nemobis <https://github.com/nemobis> do you know who the dedicated intern is? Can we tag him on here for discussion?
There's some information at
<https://www.fsf.org/blogs/sysadmin/the-completion-of-davids-internship-work-on-the-free-software-directory>
and previous blog posts. Looks like the internship is over.

- @alexmorley having an API would definitely be awesome! Btw, did you contact the owner of osalt.com?

- I've tried to contact the owner of openscience.org but didn't get any response back. :( Could be nice to retry and get in touch with him because the website hasn't been updated for a while.
 
- @johav As I understand it, JROST is perhaps more aimed at collaboaration between the organizations involved (which I think is very worhtwhile BTW) than about providing a comprehensive overview of open tools/platforms.

    - One thing that flowed from my discussions/involvement with JROST (as well as from our own work on charting tools and platforms) is the importance of considering various openness characteristics and the degrees of importance different people/stakeholder groups may attach to them.

    - For FORCE2018, Jeroen Bosman @JeroenBosman and I did a presentation (https://doi.org/10.5281/zenodo.1461058) and poster (https://doi.org/10.5281/zenodo.1453281) on this for which we prototyped a selection model with a selection (non-exhaustive!) of tools/platforms scored on 5 criteria related to openness:

    - open source
         - open source
         - non-profit / not-for-profit
         - open-licensed data
         - free to end user
         - stakeholder governed


    - We made this into an interactive template where one can explore what the choices made on these criteria mean for what tools/platforms are compliant: https://tinyurl.com/workflow-choices
(scoring sheets are in hidden tabs, feel free to unhide but please make a copy if you'd want to edit/modify any of that)

    - Polling participants from various stakeholder groups on these criteria reveal (not surprisingly) marked differences in what is thought important, All this to underscore my point that in any database, either be sure to make explicit choices on criteria used and why, or use multiple criteria that allow people to consider their own stance on that and how if effects the results.

    - /novel finished
 
- Open: Create Database of FOSS <--> Proprietory alternatives for Calculator #2

- thanks a lot @bmkramer and apologies for the delayed reply.
    - What a beautiful approach to getting hold of the high number of tools available! Thanks for pointing this out - I will happily implement more of your resources in upcoming courses.

    - Looks like a living database with all kinds of tools/functionalities/Licences/interoperability implemented will take some dedicated sessions and Mozilla sprints to bring to life... :/ would such be wortwhile the effort you think?
Any ways we can raise funds to do that collaboratively perhaps also with Thomas Cruzier's www.connectedresearchers.com platform content? And I have seen similar attempts elsewhere, which could be recruited.
So maybe starting by defining the criteria and sending out and disseminate a(nother) survey could be a start. Who'd be in?
-  I'm definitely in. And I have a little time and some resources to make it happen. For me it's definitely worth the time as I have a scheme on how we can use it to help open projects get income.

    - I was thinking of creating another repo called MOD (meta open database - working title haha) where we can move forward with this?
