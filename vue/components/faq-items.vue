<template>
    <div>
        <ul class="faq-listing">
            <li
                v-for="(item, index) in items"
                :key="index"
                @click="toggleActive(item)"
                :class="{ 'is-active': activeItems.indexOf(item) >= 0 }">
                <h2 class="question">{{ item.question }}</h2>

                <div class="answer" v-html="item.answer"> </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                activeItems: [],
                items: [
                    {
                        question: 'How does SCIENTILLA work?',
                        answer: '<p>SCIENTILLA is based on a hierarchy of profiles (personal, research group, institute/university). Each researcher is the full administrator of his/her own profile. He can choose which publications are eligible to be part of his profile: these documents are “certified” by the researcher who adds them to the Verified section in SCIENTILLA. At this point, they are visible to other SCIENTILLA users.</p><p>Group leaders manage both their own personal profile and the profile of their research group. The higher level of the hierarchy is the profile representing the institute itself. Every type of profile is managed independently.</p>' 
                    }, {
                        question: 'In which sense SCIENTILLA is a collaborative environment?',
                        answer: '<p>One of the purposes of SCIENTILLA is to ease the work of the researcher in maintaining up-to-date the record of the scientific output.</p><p>When a researcher inserts a document in SCIENTILLA, the document is suggested to his co-authors in the system. SCIENTILLA maintains for the user a updated list of suggested documents, made of publications indexed by the researcher Scopus Id (if the institute already has an access to Elsevier Scopus APIs) and documents inserted in the whole system that the researcher likely authored. The researcher can then add documents to his profile, without the burden of re-typing all the information.</p><p>The suggested documents for the profile of a research group are made of all the documents coming from its group members. The group leader chooses which output is suitable to belong to the output of the research group. The same goes for the profile of the whole institute.</p><p>Missing documents can be always added manually.</p>' 
                    }, {
                        question: 'Would SCIENTILLA be suitable for my institution?',
                        answer: '<p>SCIENTILLA is designed to be a central repository for the scientific output of the staff members of an institute and its research groups. Every institution has its own installation. Currently, SCIENTILLA supports Single sign-on authentication via LDAP to integrate with the same login credentials used by other institutional systems often present. Feel free to contact us to inquire about a SCIENTILLA installation for your institute!</p>' 
                    }, {
                        question: 'Can I try SCIENTILLA?',
                        answer: '<p>If you are a member of the Italian Institute of Technology (IIT), you can already login with your IIT credentials at <a href="https://scientilla.iit.it" target="_blank">https://scientilla.iit.it</a>. A demo version is going to be developed for non-IIT users: researchers and administrative staff of other institutes will be able to get hands-on experience on how the system works and choose if it could fit as a solution for their institute.</p>' 
                    }, {
                        question: 'Does an institution need a paid access to scopus API?',
                        answer: '<p>SCIENTILLA does work also without an institutional paid access to Elsevier Scopus APIs. Of course, the quick import of documents from Scopus given a researcher Scopus Id and all the features related to bibliometric data would be missing. At the moment, the Scopus database is the source of information for citational data. Although an access to Scopus APIs is not required, many features in SCIENTILLA would greatly benefit from it and it is recommended. Check <a href="https://dev.elsevier.com/sc_apis.html">here</a> for more information on the Elsevier Scopus APIs.</p>' 
                    }, {
                        question: 'Is SCIENTILLA open source?',
                        answer: '<p>Yes, you can find the SCIENTILLA code at the following URL on GitHub: <url>.</p>' 
                    }, {
                        question: 'Does SCIENTILLA have an API?',
                        answer: '<p>Yes, SCIENTILLA has a Json REST API. All information, metadata and metrics about your documents are potentially accessible by external services of your institution.</p>' 
                    }, {
                        question: 'Can users export the information in their profiles?',
                        answer: '<p>Yes, the list of full references of the documents in your profile is available for download, both in .csv (comma-separates values) and .bib (BibTeX) format.</p>' 
                    }, {
                        question: 'How can I contact the SCIENTILLA team?',
                        answer: '<p>Feel free to contact us for any question, feedback or if you would like to explore the possibility of installing SCIENTILLA in your institute/university. We will be very happy to reply and get in touch with you! Our contacts at <URL_of_contacts_page>.</p>' 
                    }
                ]
            }
        },
        methods: {
            toggleActive(item) {
                if (this.activeItems.indexOf(item) >= 0) {
                    this.activeItems = this.activeItems.filter(function(activeItem) {
                        return item != activeItem;
                    });
                } else{
                    this.activeItems.push(item);
                }
            }
        }
    }
</script>