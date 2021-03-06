webpackJsonp([5],{

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitygudelinesPageModule", function() { return CommunitygudelinesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communitygudelines__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunitygudelinesPageModule = (function () {
    function CommunitygudelinesPageModule() {
    }
    CommunitygudelinesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__communitygudelines__["a" /* CommunitygudelinesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__communitygudelines__["a" /* CommunitygudelinesPage */]),
            ],
        })
    ], CommunitygudelinesPageModule);
    return CommunitygudelinesPageModule;
}());

//# sourceMappingURL=communitygudelines.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabspagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadmedia_uploadmedia__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { DashboardPage } from '../dashboard/dashboard';
//import { ArtprofilePage } from '../artprofile/artprofile';


/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabspagePage = (function () {
    function TabspagePage(event, security, navCtrl, navParams) {
        this.event = event;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.custompropic1 = 'https://www.artformplatform.com/images/user-comment.png';
        // tab1Root: any = "DashboardPage"
        this.DashboardPage = 'DashboardPage';
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__uploadmedia_uploadmedia__["a" /* UploadmediaPage */];
        this.tab3Root = 'CategorytabpagePage';
        this.tab4Root = 'CompetitionspPage';
        this.tab5Root = 'ArtprofilePage';
        this.custompropic12 = 'https://i.stack.imgur.com/S0qie.png';
        // this.profile_pic=localStorage['profile_pic']
        // let tabbar = this.tabRef._tabbar.nativeElement;
        // let element = tabbar.childNodes[tabbar.childElementCount-1];
        // if(element) {
        //   element.removeChild(element.childNodes[1]);
        //   let img = document.createElement("img");
        //   img.setAttribute("class", "tab-icon-custom");
        //   img.setAttribute("src",this.profile_pic );
        //   element.insertBefore(img, element.childNodes[1]);
        // } 
    }
    TabspagePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.tabRef.select(2);
        this.event.subscribe('user:image', function (profile_pic, firtsname, time) {
            console.log('firstname', firtsname);
            _this.profile_pic = profile_pic;
            localStorage['profile_pic'] = profile_pic;
            console.log('profile_pic', _this.profile_pic);
            var tabbar = _this.tabRef._tabbar.nativeElement;
            var element = tabbar.childNodes[tabbar.childElementCount - 1];
            if (element) {
                element.removeChild(element.childNodes[1]);
                var img = document.createElement("img");
                img.setAttribute("class", "tab-icon-custom");
                img.setAttribute("src", _this.profile_pic);
                element.insertBefore(img, element.childNodes[1]);
            }
        });
        //this.navCtrl.setRoot(TabspagePage,{id:4})
        // if(localStorage['status']=='true')
        // {
        //     this.id=4
        // }
        // else
        // {
        // this.id=this.navParams.get('id')
        // }
        this.id = 4;
        //alert('status'+localStorage['status'])
        console.log(this.id);
        //  alert('id'+this.id)
        this.tabRef.select(this.id);
        console.log('ionViewDidLoad TabspagePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Tabs */])
    ], TabspagePage.prototype, "tabRef", void 0);
    TabspagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabspage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/tabspage/tabspage.html"*/`<!--\n  Generated template for the TabspagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs #myTabs >\n  <!-- <div style="height:10px;width:40px;background-color:red" ></div> -->\n  <ion-tab [root]="DashboardPage"   tabTitle="Home" tabIcon="custom-home" ></ion-tab>\n  <ion-tab  [root]="tab2Root" tabTitle="Upload" tabIcon="custom-upload"></ion-tab>\n  <ion-tab  [root]="tab3Root" tabTitle="Categories" tabIcon="custom-category" ></ion-tab>\n  <ion-tab style="font-size:1.2rem " [root]="tab4Root"  tabTitle="Competitions" tabIcon="custom-price"></ion-tab>\n   <ion-tab  [root]="tab5Root"   tabTitle="Profile" tabIcon="custom-propic" tabsHideOnSubPages="true"></ion-tab>\n  <!-- <ion-tab   [root]="tab5Root" tabTitle="Profile" tabIcon="custom-propic" tabsHideOnSubPages="true"></ion-tab> -->\n</ion-tabs>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/tabspage/tabspage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabspagePage);
    return TabspagePage;
}());

//# sourceMappingURL=tabspage.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitygudelinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__ = __webpack_require__(814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CommunitygudelinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunitygudelinesPage = (function () {
    function CommunitygudelinesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommunitygudelinesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommunitygudelinesPage');
    };
    CommunitygudelinesPage.prototype.navigatetotab = function (id) {
        console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__["a" /* TabspagePage */], { id: id });
    };
    CommunitygudelinesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communitygudelines',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/communitygudelines/communitygudelines.html"*/`<!--\n  Generated template for the CommunitygudelinesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>\n    <ion-title style="    text-align: center;\n    margin-left: -3px;">Community Guidelines</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p>We want Artform Platform to be a community where everyone feels respected. It’s up to all of us to make sure that that happens. This page includes important information about our expectations of you while using Artform Platform. Please take the time to carefully read through this information. We take these guidelines seriously and expect you to do the same.</p>\n\n    <p style="font-family: AvenirLTStd-Heavy;">Copyright</p>\n    <p>We have always set out to build a diverse, collaborative community of creators, where everyone gets credit for the content that they make and own, and where the rights of creators are respected.</p>\n    \n    <p>You are responsible for all activity associated with your account, including all content that you post. If you post content that belongs to someone else (for example, if you are a distributor or promotional agency acting on behalf of an artist or label), or if you use someone else’s content in your own work, it is your responsibility to ensure that you have the permission of all relevant rights holders in order to post that content to Artform Platform. Anyone uploading another person’s content without the necessary permissions is liable to have that content removed or their account terminated.</p>\n    \n    <p>If you are unsure whether you can upload something you should take independent legal advice on it. If you feel that someone is infringing your copyright email or write to us and we will investigate the matter for you. If you do decide to u</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">Trademark</p>\n    <p>A trademark is a word, symbol or combination that identifies the source of a product and distinguishes it from other products. A trademark is specifically acquired by a company or other entity through a legal process and once acquired gives the owner exclusive rights to the trademark usage with respect to those goods.</p>\n    \n    <p>Trademark infringement is improper or unauthorised use of a trademark in a way that is likely to cause confusion as to the source of that product. Artform Platform policies prohibit videos and channels that infringe trademarks. If you upload content on Artform Platform that uses another party\'s trademarks in a way that is likely to cause confusion, your uploads can be blocked and your channel suspended.</p>\n    \n        <p>If you are a trademark owner and you believe that your trademark is being infringed, please note that Artform Platform is not in a position to mediate trademark disputes between users and trademark owners. As a result, we strongly encourage trademark owners to resolve their disputes directly with the user who posted the content in question. Contacting the uploader may resolve things more quickly in a way that is more beneficial to you, the uploader, and the Artform Platform community.</p>\n    \n            <p>If you are unable to reach a resolution with the account holder in question, please submit a trademark complaint by contacting the Artform Platform and complaining in writing.</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">Other Legal Issues</p>\n    <p>Legal Complaints and Court Orders: If you feel that certain content on the site violates your rights or applicable laws, you may submit a legal complaint without notice to Artform Platform. If you have a court order against another community member or uploader, you may send a copy of the court order to the Artform Platform team before a decision is made to remove the subject matter of the legal complaint. Each court order is examined and evaluated based on a set of regional and global criteria.\n    \n    Please note that you also have other resources to bring content to our attention. For example, if you feel the content does not comply with our community guidelines, please flag it. We also encourage you to consider whether the audio or visual content meets the standards for removal under our community guidelines or our privacy policy before filing a legal complaint.\n    \n    Circumvention of Technological Measures (CTM): When we say circumvention of technological measures, we’re referring to tools that allow users to evade a software’s licensing protocol. This can mean serial numbers, keygens, passwords and other methods to hack software or games. What is the difference between CTM and copyright? CTM is a tool that will give users the means to access software. Copyright is concerned with the depiction of the software or the means to acquire it. If the software’s interface is in an uploaded video, or there is a download link to the software in the video or video description, you may wish to file a copyright takedown notice.</p>\n    \n    <p>A CTM claim is appropriate when the infringed material isn’t present in the video (or directly linked to), but the video offers a way for users to access it illegitimately. If you believe that you have a valid CTM claim, please contact Artform Platform either in writing or by email.</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">Respect:</p>\n    <p>Artform Platform is an open, social platform, made up of a vibrant group of people with differing views, talents, opinions, and cultural backgrounds. We support freedom of speech and the fundamental right for individuals to express themselves, and expect everyone else to do the same. Respecting each other on Artform Platform means following some basic principles:</p>\n    \n    <p>Don’t be a bully: We have zero tolerance for abusive or threatening behavior within the community. We consider abuse to be any activity where the intent is to attack or demean someone else. Anyone found to be engaging in this type of activity risks the immediate, permanent termination of their account.\n    Criticize constructively: We recognize that criticism can be a valuable tool for helping each other to improve. Remember that behind each track is a person. Criticism should always focus on the content, and not on the individual who created it. Please share your opinion with others, but do so in a constructive way. Before posting feedback, always ask yourself whether you would appreciate receiving the same feedback. If not, don’t post it.\n    Privacy of others: Everyone has the right to privacy, no matter who they are. Don’t share personal details of another person (or entity), without their permission. This includes recordings of private conversations, photographs, unlisted phone numbers, and home or email addresses.</p>\n    <p>Don’t pretend to be someone else\n    As a service which has the with creator needs in mind, we welcome the use of stage names or professional identities on Artform Platform. However, that doesn’t mean that you can impersonate another person, or post content that is intentionally misleading. As a rough guide, you mustn’t create profiles or post content that is intended to make people think you are someone else. You must not use someone else’s name or trademark without their permission, or pretend to be associated with someone you aren’t, even if you feel that you are helping that person by doing so.</p>\n    <p>If you feel that someone is impersonating you, or is infringing your trademark rights, you must communicate your concerns to us.\n    Self promotion & building your audience</p>\n    <p>Artform Platform aims to help creators to connect directly with their fans. We understand that promoting your work is important, and we have designed our website to encourage you to seek out fans and other like-minded individuals. In our experience, the most successful forms of promotion are built upon meaningful interactions between creators and their audience. However, there is a fine line between developing these connections and over-sharing with members of the community.</p>\n    \n    <p>To help encourage a two-way relationship between creators and fans, we have technical restrictions in place to limit activity that goes against this principle.</p>\n    \n    <p>Specifically, Artform Platform strongly discourages, and reserves the right, in certain cases to close or suspend individual user accounts for:</p>\n    \n    <p>Posting identical or almost identical comments or messages in large volumes</p>\n    <p>Repeatedly following large volumes of accounts in a short period of time</p>\n    <p>Repeatedly contributing your content to large volumes of groups in a short period of time</p>\n    <p>Repeatedly unfollowing and refollowing the same accounts, in order to draw attention to your own profile</p>\n    <p>Repeatedly re-sharing or rating content that you have liked or re-shared in the past</p>\n   <p style="font-family: AvenirLTStd-Heavy;"> Forbidden content</p>\n    <p>As an open platform, freedom of expression is important to us. However, there are certain types of content that have no place on Artform Platform. To avoid any uncertainty, if the moderators of the Artform Platform website deem something to be forbidden their decision is final. In order to protect the community and maintain positivity, please don’t post:</p>\n    \n    <p style="font-style:italic ">Nude and Sexual Content: Remember that Artform Platform can be accessed by people as young as 13. Don’t post any content that is predominantly sexual in nature, or that could be perceived as an aid to sexual gratification. For the avoidance of doubt, this includes, but is not limited to, images containing nudity and recordings or detailed descriptions of sexual acts. There are plenty of other places to find that content online.</p>\n   <p> Hate speech: You are welcome to share your opinions and beliefs on Artform Platform, even if they might be controversial, or challenge the status-quo. However, we will not tolerate content that promotes or encourages hatred, discrimination or violence against others based on things like race, cultural identity or ethnic background, religious beliefs, disability, gender identity, or sexual orientation. Artform Platform strictly prohibits content intended to recruit for terrorist organisations, incite violence, celebrate terrorist attacks or otherwise promote acts of terrorism. We also do not permit foreign terrorist organisations to use Artform Platform.</p>\n    \n    <p>Content intended to document events connected to terrorist acts or news reporting on terrorist activities may be allowed on the site with sufficient context and intent. However, graphic or controversial footage may be subject to age-restrictions or a warning screen as the Artform Platform team see fit. Don\'t encourage others to commit specific acts of violence.</p>\n    \n    <p>Violent or Graphic Content: It\'s not okay to post violent or gory content that\'s primarily intended to be shocking, sensational, or disrespectful. If posting graphic content in a news or documentary context, please be mindful to provide enough information to help people understand what\'s going on in the video.\n    Defamatory Content: While Artform Platform accepts that defamation laws vary from country to country, it takes the view that any content that damages the reputation of another person or business in the eyes of the general public should not be posted.</p>\n    \n    <p>We take into account local legal considerations in our defamation blocking process, and in some cases, we require a court order. For us to be able to process a defamation blocking request, the claim needs to be specific and strongly supported. For example, it needs to explain why you believe that the statements are untrue and how it damages your reputation. The moderators of Artform Platform retain total discretion to block any visual or audio material it deems to be defamatory.</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">Spam & prohibited services:</p>\n    <p>We aim for Artform Platform to be a spam-free zone. To support this effort, we have policies in place that prohibit both spammy activity and the use of related services which violate our Terms. The following activities are not permitted and Artform Platform reserves the right to terminate or suspend individual user accounts for:</p>\n    \n    <p>-Posting unsolicited links to commercial spam i.e. profiles or content whose sole aim is to drive traffic to external websites, via messages, comments, profile and track descriptions or artwork</p>\n    <p>-Creating multiple accounts with the intention of inflating the popularity of other profiles</p>\n    <p>-The creation, use, or promotion of:<p>\n    <p>-Bots or other automated means to perform social interactions;</p>\n    <p>-Services that claim to boost a profile’s popularity such as followers, plays, likes, or reposts;</p>\n    <p>-Services that sell social interactions or other forms of promotion on Artform Platform.</p>\n    <p>Tell us about it</p>\n    <p>It’s possible that you might come across content that you disagree with or find distasteful from time to time. If that’s the case, the best thing you can do is to ignore that content. However, if you encounter any content that crosses the line and breaches these guidelines or our Terms of Use, including impersonation, abusive/offending or threatening behavior, pornography or malicious speech, please tell Artform Platform about it either in writing or by email. Our team will review all reports objectively, and remove any content that violates these rules, or applicable law.</p>\n    \n    <p>Please bear in mind that something that you find unacceptable, may not be unacceptable to everyone. We try to maintain a fair and balanced approach, but reporting content will not always result in that content being removed if it does not break the rules. Either way, we will always let you know the outcome of your report.</p>\n    \n    <p>If you break the rules</p>\n    <p>If we receive notification from a rightsholder that any content uploaded to your account infringes their copyright, or if we believe that your activity violates any of our other guidelines, we will send you a written warning. If we have to send you more than two of these warnings, we will terminate your account. If the Artform Platform team deem the activity is extreme, we reserve the right to terminate your account immediately, without prior warning.</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">To sum up</p>\n    <p>Be considerate of others, respect the law and think about these guidelines before you post. We aim to make objective, fair decisions when content is reported to us and in most cases, will send you a warning before we take any other measures. We think this is reasonable but if you don\'t agree, maybe Artform Platform isn’t the place for you.</p>\n    \n    <p>We may need to update these Community Guidelines occasionally, so please be sure to check back here every so often for updates.</p>\n    \n   <p>Artform Platform</p>\n</ion-content>\n<ion-footer>\n  \n    <ion-row class="div-icon">\n      <ion-col (click)="navigatetotab(0)" >\n        <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/home.png">\n      </div>\n     \n      <p class="p-tag">Home</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(1)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/uploaded.png">\n        </div>\n        <p class="p-tag">Upload</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(2)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/categories.png">\n        </div>\n        <p class="p-tag">Categories</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(3)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/price.png">\n        </div>\n        <p class="p-tag">Competitions</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(4)">\n        <div class="img-box">\n        <img style=" border-radius: 34px;\n        height: 24px;\n        width: 24px;margin-top: 3px;" class="img-style1" src="assets/tabsicon/propic.jpg">\n        </div>\n        <p class="p-tag">Profile</p>\n      </ion-col>\n    </ion-row>\n \n</ion-footer>`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/communitygudelines/communitygudelines.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CommunitygudelinesPage);
    return CommunitygudelinesPage;
}());

//# sourceMappingURL=communitygudelines.js.map

/***/ })

});
//# sourceMappingURL=5.js.map