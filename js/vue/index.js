(function (Vue){
	var app = new Vue({
		el: "#app",
        data() {
            return {
                skills: [
                    { name: 'HTML', percent: '1%' },
                    { name: 'CSS', percent: '2%' },
                    { name: 'JS', percent: '3%' },
                    { name: 'JQUERY', percent: '4%' },
                ],
                socials: [
                    { name: 'Facebook', account: 'JohnDoe@facebook.com', link: 'https://facebook.com', classIcon: 'fa-facebook-square' },
                    { name: 'Twitter', account: 'JohnDoe@twitter.com', link: 'https://twitter.com', classIcon: 'fa-twitter-square' },
                    { name: 'Youtube', account: 'JohnDoe@youtube.com', link: 'https://youtube.com', classIcon: 'fa-youtube' },
                    { name: 'Linkedin', account: 'JohnDoe@linkedin.com', link: 'https://linkedin.com', classIcon: 'fa-linkedin' },
                ],
                workExperiences: [
                    { year: '2018 - 2019', positionTitle: 'Position 1', positionDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
                    { year: '2020 - present', positionTitle: 'Position 2', positionDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
                ],
                educations: [
                    { year: '2011 - 2014', degree: 'High School', details: 'Lorem ipsum dolor sit amet!' },
                    { year: '2014 - 2018', degree: 'College', details: 'Lorem ipsum dolor sit amet!' },
                ],
                achievements: [
                    'achievement 1', 'achievement 2', 'achievement 3', 'achievement 4', 'achievement 5'
                ],
                trainings: [
                    { year: '2011', name: 'Google I/O', details: 'Lorem ipsum dolor sit amet!' },
                    { year: '2014', name: 'Web Design', details: 'Lorem ipsum dolor sit amet!' },
                    { year: '2018', name: 'DICT Web Course', details: 'Lorem ipsum dolor sit amet!' },
                ],
            }
        },
    });
})(Vue);