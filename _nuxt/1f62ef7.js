(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{279:function(e,t,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("86b44540",content,!0,{sourceMap:!1})},280:function(e,t,n){"use strict";var o={props:{imgSrc:{type:String,default:"",required:!0},imgAlt:{type:String,default:"UFC Image"},imageRatio:{type:String,default:"ratio-4-3"},isWhiteOverlay:{type:Boolean,default:!1},isVideo:{type:Boolean,default:!1}}},r=(n(283),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"img-w-anim image-ratio",class:e.imageRatio},[t("div",{class:e.isWhiteOverlay?"img-w-anim--overlay white-overlay":"img-w-anim--overlay"}),e._v(" "),e.isVideo?e._e():t("img",{staticClass:"animated-img",attrs:{src:e.imgSrc,alt:e.imgAlt}}),e._v(" "),e.isVideo?t("video",{staticClass:"animated-img",attrs:{muted:"",autoplay:"",loop:""},domProps:{muted:!0}},[t("source",{attrs:{src:e.imgSrc,type:"video/mp4"}}),e._v("\n    Your browser does not support the video tag.\n  ")]):e._e()])}),[],!1,null,null,null);t.a=component.exports},283:function(e,t,n){"use strict";n(279)},284:function(e,t,n){var o=n(7)(!1);o.push([e.i,".img-w-anim{position:relative;overflow:hidden}.img-w-anim .img-w-anim--overlay{background:#f6f6f6;height:100%;position:absolute;top:0;right:0;z-index:1}.img-w-anim .img-w-anim--overlay.white-overlay{background:#fff}.img-w-anim img,.img-w-anim video{opacity:0;z-index:0}.img-w-anim.in-view .img-w-anim--overlay{-webkit-animation:overlayAnim 2s ease both;animation:overlayAnim 2s ease both}.img-w-anim.in-view img,.img-w-anim.in-view video{-webkit-animation:imgAnim .2s ease both;animation:imgAnim .2s ease both;-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes overlayAnim{0%{width:100%;transform:translateX(100%)}50%{width:200%;transform:translateX(-50%)}to{width:200%;transform:translateX(-100%)}}@keyframes overlayAnim{0%{width:100%;transform:translateX(100%)}50%{width:200%;transform:translateX(-50%)}to{width:200%;transform:translateX(-100%)}}@-webkit-keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}@keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}",""]),e.exports=o},290:function(e,t,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("301568ec",content,!0,{sourceMap:!1})},291:function(e,t,n){"use strict";var o=n(63),r=n(280),l={components:{Button:o.a,imageAnim:r.a},props:{cardFeaturedImage:{type:String,required:!0,default:""},cardTitle:{type:String,required:!0,default:""},cardLink:{type:String,default:""},smallCTA:{type:Boolean,default:!1},imageRatio:{type:String,default:"ratio-4-3"},buttonColor:{type:String,default:"button-primary"},buttonTextSize:{type:String,default:"button-md-text"},buttonLabel:{type:String,default:""},buttonIcon:{type:String,default:""},isExternalLink:Boolean,cardContent:{type:String,default:""}}},w=(n(302),n(3)),component=Object(w.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"button-card",class:{"small-card":e.smallCTA},attrs:{tabindex:"0"}},[t("imageAnim",{attrs:{"img-src":e.cardFeaturedImage,"img-alt":e.cardTitle+" Featured Image","image-ratio":e.imageRatio}}),e._v(" "),t("div",{staticClass:"button-card--content"},[e.smallCTA?t("h5",[e._v(e._s(e.cardTitle))]):t("h4",[e._v(e._s(e.cardTitle))]),e._v(" "),""!==e.cardContent?t("p",{domProps:{innerHTML:e._s(e.cardContent)}}):e._e(),e._v(" "),""!==e.buttonLabel?t("Button",{attrs:{"button-label":e.buttonLabel,"button-link-url":e.cardLink,"button-colors":e.buttonColor,"button-sizing":e.buttonTextSize,"icon-path":e.buttonIcon,"is-external":e.isExternalLink}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=component.exports},302:function(e,t,n){"use strict";n(290)},303:function(e,t,n){var o=n(7)(!1);o.push([e.i,".button-card{background:#fff;width:100%;display:flex;flex-direction:column}.button-card--content{padding:32px;flex:1;display:flex;flex-direction:column;align-items:flex-start}.button-card p{font-size:1.6rem;margin-left:0;margin-right:0}.button-card h4{margin-bottom:24px;text-transform:none}.button-card h5{font-weight:500;margin-bottom:8px;text-transform:none}.button-card .button-primary{margin-top:auto}.button-card .button-with-icon{margin-top:16px}.button-card.small-card .button-card--content{padding:24px}.button-card.small-card .button-card--content p{margin-top:0}@media (min-width:414px){.button-card{margin-bottom:32px}}@media (min-width:768px){.button-card{margin-bottom:16px}}",""]),e.exports=o},304:function(e,t,n){"use strict";n(364)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},332:function(e){e.exports=JSON.parse('[{"date":"2022-06-29","title":"Health Transformation Journey - BeeJay Haddad","author":"UFC GYM Team","tags":["lifestyle","health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2022-06-29-health-tranformation-journey-beejay-haddad.jpg","link":"/news/2022-06-29/health-tranformation-journey-beejay-haddad/"},{"date":"2022-06-15","title":"6 Things to Expect from Cryotherapy with CryoBuilt","author":"CryoBuilt","tags":["health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2022-06-15-6-things-to-expect-from-cryotherapy-with-cryobuilt.jpg","link":"/news/2022-06-15/6-things-to-expect-from-cryotherapy-with-cryobuilt/"},{"date":"2022-05-27","title":"The Best Exercises – For Everyone!","author":"UFC GYM Team","tags":["lifestyle","health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2022-05-27-the-best-exercises-for-everyone3.jpg","pageTitle":"The Best Exercises – For Everyone!","pageDescription":"We caught up with one of our Fitness Directors, Vincent Angeli, to dig into a question that often pops up when gym-goers are assessing their fitness goals and how to reach them – What are the best exercises that everyone should do?","link":"/news/2022-05-27/the-best-exercises-for-everyone/"},{"date":"2022-03-29","title":"Women Gym Owners – Meet Fay Marakas","author":"UFC GYM Team","tags":["lifestyle","franchise"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2022-03-29-women-owners-meet-fay-marakas.jpg","pageTitle":"Women Gym Owners – Meet Fay Marakas","pageDescription":"March is Women’s History Month and we are celebrating women in the UFC GYM community and their acheivements. Fay Marakas is an entrepreneur and businesswoman who owns UFC GYM Clearwater, Florida.","link":"/news/2022-03-29/women-owners-meet-fay-marakas/"},{"date":"2022-03-17","title":"Minty Green Protein Shake","author":"UFC GYM Team","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2022-03-17-minty-green-protein-shake.jpg","link":"/news/2022-03-17/minty-green-protein-shake/"},{"date":"2022-02-10","title":"Winning Workout Tips","author":"UFC GYM Team","tags":["events","health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2022-02-10-winning-workout-tips.jpg","link":"/news/2022-02-10/winning-workout-tips/"},{"date":"2021-09-14","title":"The Ultimate Fitness Challenge – Trainer Tips","author":"UFC GYM Team","tags":["events","health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-09-14-ultimate-fitness-challenge-coaches-tips.jpg","link":"/news/2021-09-14/ultimate-fitness-challenge-coaches-tips/"},{"date":"2021-09-03","title":"The Ultimate Fitness Challenge – How to Prepare","author":"UFC GYM Team","tags":["events","health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-09-03-ultimate-fitness-challenge-prep.jpg","link":"/news/2021-09-03/ultimate-fitness-challenge-prep/"},{"date":"2021-08-27","title":"Pizza Friday with Dana White","author":"UFC GYM Team","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-08-27-pizza-friday-with-dana-white-3.jpg","link":"/news/2021-08-27/pizza-friday-with-dana-white/"},{"date":"2021-06-18","title":"Conquer Your Fitness Plateau","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-06-18-conquer-your-fitness-plateau.jpg","pageTitle":"Conquer Your Fitness Plateau","pageDescription":"Plateaus are a normal part of the fitness journey. Check out the below tips to break that plateau and get back on a successful trajectory.","link":"/news/2021-06-18/conquer-your-fitness-plateau/"},{"date":"2021-06-07","title":"Listen to Your Heart (Rate)","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-06-07-listen-to-your-heart-rate.jpg","pageTitle":"Listen to Your Heart Rate While Working Out","pageDescription":"Whether you’re in the middle of a workout session or reflecting back post-sweat, it can be difficult to accurately tell how much energy you’re expending.","link":"/news/2021-06-07/listen-to-your-heart-rate/"},{"date":"2021-05-24","title":"Quick Tips to Support Workout Motivation","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-05-24-maintain-the-motivation.jpg","pageTitle":"Quick Tips to Support Workout Motivation","pageDescription":"Getting your fitness motivation on point now sets you up for success moving forward.","link":"/news/2021-05-24/maintain-the-motivation/"},{"date":"2021-05-09","title":"Fit Mom Spotlight - Gabriella Barrios","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-05-09-interview-with-gabriella-barrios2.jpg","pageTitle":"Fit Mom Spotlight | Gabriella Barrios","pageDescription":"We recently spoke with trainer Gabriella Barrios about juggling life as a fitness enthusiast, mother, and being an all-around strong and empowering woman.","link":"/news/2021-05-09/interview-with-gabriella-barrios/"},{"date":"2020-10-30","title":"Scary Good Protein Shakes","author":"UFC GYM Team","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2020-10-30-scary-good-protein-shakes-banner.jpg","pageTitle":"Protein Shakes That Actually Taste Good","pageDescription":"Treat yourself with something other than candy! Get into the Halloween spirit with these scary good protein shakes packed with healthy nutrients and vitamins.","link":"/news/2020-10-30/scary-good-protein-shakes/"},{"date":"2020-01-24","title":"First UFC GYM Celebrates 10 Years","author":"UFC GYM Team","tags":["events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2020-01-24-first-ufc-gym-celebrates-10-years.jpg","pageTitle":"First UFC GYM Location Celebrates 10 Years","pageDescription":"During the anniversary celebration, guests will have the opportunity to take part in a variety of MMA-inspired fitness classes","link":"/news/2020-01-24/first-ufc-gym-celebrates-10-years/"},{"date":"2020-01-07","title":"UFC GYM Partners with Augie’s Quest to Cure ALS","author":"UFC GYM Team","tags":["events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2020-01-07-augies-quest-banner.jpg","link":"/news/2020-01-07/augies-quest/"},{"date":"2019-11-26","title":"Holiday Dessert Protein Shakes","author":"UFC GYM Team","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-11-26-holiday-dessert-protein-shakes-banner.jpg","link":"/news/2019-11-26/holiday-dessert-protein-shakes/"},{"date":"2019-11-21","title":"Four Rounds with Cub Swanson","author":"UFC GYM Team","tags":["mma","box","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-11-21-four-rounds-with-cub-swanson-banner.jpg","link":"/news/2019-11-21/four-rounds-with-cub-swanson/"},{"date":"2019-10-28","title":"Pizza Friday with Dana White","author":"UFC GYM Team","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2021-08-27-pizza-friday-with-dana-white-3.jpg","link":"/news/2019-10-28/pizza-friday-with-dana-white/"},{"date":"2019-10-28","title":"NormaTec Partners With UFC GYM","author":"UFC GYM Team","tags":["events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-10-28-normatec-partners-with-ufc-gym-banner.jpg","link":"/news/2019-10-28/normatec-partners-with-ufc-gym/"},{"date":"2019-10-08","title":"Four Rounds with Cub Swanson","author":"UFC GYM Team","tags":["mma","box","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-11-21-four-rounds-with-cub-swanson-banner.jpg","link":"/news/2019-10-08/four-rounds-with-cub-swanson/"},{"date":"2019-10-08","title":"Alex Rodriguez To Open UFC GYM in Midtown Miami","author":"UFC GYM Team","tags":["events","franchise"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-10-08-alex-rodriguez-midtown-miami-banner.jpg","link":"/news/2019-10-08/alex-rodriguez-midtown-miami/"},{"date":"2019-09-08","title":"Seven Rounds With Krzysztof Soszynski","author":"UFC GYM Team","tags":["workout","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-09-08-seven-rounds-with-krzysztof-soszynski-banner.jpg","link":"/news/2019-09-08/seven-rounds-with-krzysztof-soszynski/"},{"date":"2019-09-08","title":"How to Maximize Athletic Performance","author":"UFC GYM Team","tags":["health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-24-how-to-maximize-athletic-performance-banner.jpg","link":"/news/2019-09-08/how-to-maximize-athletic-performance/"},{"date":"2019-09-07","title":"What to Expect in DUT Class","author":"UFC GYM Team","tags":["workout","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-09-07-what-to-expect-in-dut-class-banner.jpg","link":"/news/2019-09-07/what-to-expect-in-dut-class/"},{"date":"2019-09-07","title":"Brazilian Jiu Jitsu for Women","author":"UFC GYM Team","tags":["bjj","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-10-bjj-for-women-banner.jpg","link":"/news/2019-09-07/bjj-for-women/"},{"date":"2019-09-06","title":"Why Kickboxing is a Great Full Body Workout","author":"Rob McCullough","tags":["workout","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-28-why-kickboxing-is-a-great-full-body-workout-banner.jpg","link":"/news/2019-09-06/why-kickboxing-is-a-great-full-body-workout/"},{"date":"2019-09-06","title":"Take on the UFC GYM Ultimate Fitness Challenge","author":"UFC GYM Team","tags":["health","events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2019-09-06-ultimate-fitness-challenge-banner.png","link":"/news/2019-09-06/ultimate-fitness-challenge/"},{"date":"2018-10-01","title":"The Challenge to Fight Breast Cancer","author":"UFC GYM Team","tags":["health","events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-10-01-the-challenge-to-fight-breast-cancer-banner.png","link":"/news/2018-10-01/the-challenge-to-fight-breast-cancer/"},{"date":"2018-10-01","title":"30 Minute D.U.T Inspired Workout","author":"UFC GYM Team","tags":["health","events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-22-30-minute-dut-workout-banner.jpg","link":"/news/2018-10-01/30-minute-dut-workout/"},{"date":"2018-07-06","title":"Summer Sun Workout","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-07-06-summer-sun-workout-banner.jpg","link":"/news/2018-07-06/summer-sun-workout-0/"},{"date":"2018-06-26","title":"Why you should get your child involved in team sports","author":"Vince Pacleb","tags":["mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-06-26-youth-team-sports-benefits-banner.jpg","link":"/news/2018-06-26/youth-team-sports-benefits/"},{"date":"2018-06-21","title":"Healthy & Delicious Family Meal - Chicken Tacos","author":"Kat Barefield","tags":["health","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-06-21-chicken-tacos-recipe-banner.jpg","link":"/news/2018-06-21/chicken-tacos-recipe/"},{"date":"2018-06-19","title":"What to Expect in a UFC GYM Youth MMA Class","author":"Brandon Bender","tags":["workout","lifestyle","bjj","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-06-19-what-to-expect-in-a-ufc-gym-youth-mma-class-banner.jpg","link":"/news/2018-06-19/what-to-expect-in-a-ufc-gym-youth-mma-class-0/"},{"date":"2018-06-14","title":"Healthy Packed Lunches for your Children","author":"Kat Barefield","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-06-14-healthy-packed-lunch-banner.jpg","link":"/news/2018-06-14/healthy-packed-lunch-0/"},{"date":"2018-06-12","title":"Activities to get Your Family Moving","author":"Candice Becker","tags":["lifestyle","bjj"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-06-12-activities-to-get-your-family-moving-banner.jpg","link":"/news/2018-06-12/activities-to-get-your-family-moving/"},{"date":"2018-06-04","title":"UFC GYM Podcast Episode 06- Brandon Bender","author":"UFC GYM Team","tags":["podcast"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-06-04-ufc-gym-podcast-episode-6-banner.png","link":"/news/2018-06-04/ufc-gym-podcast-episode-6-0/"},{"date":"2018-05-24","title":"Workout at Home!","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-24-at-home-workout-banner.jpg","link":"/news/2018-05-24/at-home-workout/"},{"date":"2018-05-22","title":"Fast, Easy, & Delicious Family Meal","author":"Kat Barefield","tags":["health","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-22-tortilla-soup-recipe-banner.jpg","link":"/news/2018-05-22/tortilla-soup-recipe/"},{"date":"2018-05-17","title":"A Healthy Treat Recipe from UFC GYM","author":"Kat Barefield","tags":["health","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-17-healthy-treat-recipe-banner.jpg","link":"/news/2018-05-17/healthy-treat-recipe/"},{"date":"2018-05-14","title":"At-home Workout for Mom","author":"UFC GYM Team","tags":["workout","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-14-at-home-workout-mom-banner.jpg","link":"/news/2018-05-14/at-home-workout-mom/"},{"date":"2018-05-10","title":"Brazilian Jiu Jitsu for Women","author":"Shanie Rusth","tags":["bjj","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-10-bjj-for-women-banner.jpg","link":"/news/2018-05-10/bjj-for-women/"},{"date":"2018-05-08","title":"UFC GYM Podcast Episode 03- BJ Penn","author":"UFC GYM Team","tags":["podcast","lifestyle","bjj"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-08-ufc-gym-podcast-episode-3-banner.jpg","link":"/news/2018-05-08/ufc-gym-podcast-episode-3/"},{"date":"2018-05-07","title":"Brazilian Jiu-Jitsu for Kids","author":"Brandon Bender","tags":["bjj"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-07-jiu-jitsu-for-kids-banner.jpg","link":"/news/2018-05-07/jiu-jitsu-for-kids/"},{"date":"2018-05-04","title":"Why Brazilian Jiu-Jitsu is my go-to Workout","author":"Michael Vu","tags":["workout","bjj"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-04-brazilian-jiu-jitsu-workout-banner.jpg","link":"/news/2018-05-04/brazilian-jiu-jitsu-workout/"},{"date":"2018-05-03","title":"What to Expect in a UFC GYM Brazilian Jiu-Jitsu Class","author":"Brandon Bender","tags":["workout","lifestyle","bjj"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-05-03-what-to-expect-in-a-ufc-gym-bjj-class-banner.jpg","link":"/news/2018-05-03/what-to-expect-in-a-ufc-gym-bjj-class/"},{"date":"2018-04-26","title":"Full Body At-home Workout","author":"UFC GYM Team","tags":["health","workout","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-26-at-home-workout-full-body-banner.jpg","link":"/news/2018-04-26/at-home-workout-full-body/"},{"date":"2018-04-24","title":"How to Maximize Athletic Performance","author":"Melissa Conover","tags":["health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-24-how-to-maximize-athletic-performance-banner.jpg","link":"/news/2018-04-24/how-to-maximize-athletic-performance/"},{"date":"2018-04-19","title":"Keto, Paleo, IIFYM, and Plant Based Diets- Which one is best?","author":"Kat Barefield","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-19-fad-diets-banner.jpg","link":"/news/2018-04-19/fad-diets/"},{"date":"2018-04-16","title":"Nutrition with UFC GYM Athlete- Caitlin","author":"Caitlin Horvath","tags":["health"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-16-nutrition-with-ufc-gym-athlete-caitlin-banner.jpg","link":"/news/2018-04-16/nutrition-with-ufc-gym-athlete-caitlin/"},{"date":"2018-04-13","title":"UFC GYM Podcast Episode 05- Kat Barefield","author":"UFC GYM Team","tags":["health","podcast","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-13-ufc-gym-podcast-episode-5-banner.jpg","link":"/news/2018-04-13/ufc-gym-podcast-episode-5/"},{"date":"2018-04-09","title":"Nutrition on the Go","author":"Kat Barefield","tags":["health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-09-nutrition-on-the-go-banner.jpg","link":"/news/2018-04-09/nutrition-on-the-go/"},{"date":"2018-04-05","title":"7 Day Added Sugar Reset Challenge","author":"Melissa Conover","tags":["health","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-05-sugar-reset-challenge-banner.jpg","link":"/news/2018-04-05/sugar-reset-challenge/"},{"date":"2018-04-04","title":"Add Color to Your Diet - Stuffed Bell Peppers","author":"Melissa Conover","tags":["health","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-04-04-stuffed-bell-pepper-recipe-banner.jpg","link":"/news/2018-04-04/stuffed-bell-pepper-recipe/"},{"date":"2018-03-28","title":"Why Kickboxing is a Great Full Body Workout","author":"Rob McCullough","tags":["workout","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-28-why-kickboxing-is-a-great-full-body-workout-banner.jpg","link":"/news/2018-03-28/why-kickboxing-is-a-great-full-body-workout/"},{"date":"2018-03-22","title":"What to Eat Before a Conditioning Style Workout","author":"Kat Barefield","tags":["health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-22-ideal-pre-conditioning-workout-nutrition-banner.jpg","link":"/news/2018-03-22/ideal-pre-conditioning-workout-nutrition/"},{"date":"2018-03-15","title":"UFC GYM Podcast Episode 04- Anna-Rita Sloss","author":"UFC GYM Team","tags":["podcast","workout","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-15-ufc-gym-podcast-episode-4-banner.png","link":"/news/2018-03-15/ufc-gym-podcast-episode-4/"},{"date":"2018-03-13","title":"UFC GYM Athlete Highlight - Ashley Flores","author":"UFC GYM Team","tags":["workout","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-13-athlete-highlight-ashley-flores-banner.jpg","link":"/news/2018-03-13/athlete-highlight-ashley-flores/"},{"date":"2018-03-12","title":"I Took a Kickboxing Class at UFC GYM...","author":"Caitlin Horvath","tags":["workout","lifestyle","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-12-i-took-a-kickboxing-class-at-ufc-gym-banner.jpg","link":"/news/2018-03-12/i-took-a-kickboxing-class-at-ufc-gym/"},{"date":"2018-03-02","title":"What to Expect in a UFC GYM Kickboxing Conditioning Class","author":"Matthew Galindo","tags":["workout","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-03-02-what-to-expect-in-a-ufc-gym-kickboxing-class-banner.jpg","link":"/news/2018-03-02/what-to-expect-in-a-ufc-gym-kickboxing-class/"},{"date":"2018-02-26","title":"UFC GYM Podcast Episode 02- Cub Swanson","author":"UFC GYM Team","tags":["podcast","workout","lifestyle","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-26-ufc-gym-podcast-episode-2-banner.jpg","link":"/news/2018-02-26/ufc-gym-podcast-episode-2/"},{"date":"2018-02-22","title":"30 Minute D.U.T Inspired Workout","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-22-30-minute-dut-workout-banner.jpg","link":"/news/2018-02-22/30-minute-dut-workout/"},{"date":"2018-02-20","title":"Benefits of High Intensity Interval Training (HIIT)","author":"Christine DiBugnara","tags":["workout","lifestyle"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-20-benefits-of-hiit-banner.jpg","link":"/news/2018-02-20/benefits-of-hiit/"},{"date":"2018-02-19","title":"Essential Moves in a Kickboxing Class","author":"Shanie Rusth","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-19-essential-moves-in-a-kickboxing-class-banner.jpg","link":"/news/2018-02-19/essential-moves-in-a-kickboxing-class/"},{"date":"2018-02-15","title":"Why I Chose UFC GYM","author":"Candice Becker","tags":["workout","lifestyle","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-15-why-i-chose-ufc-gym-banner.jpg","link":"/news/2018-02-15/why-i-chose-ufc-gym/"},{"date":"2018-02-12","title":"At Home D.U.T Inspired Workout","author":"UFC GYM Team","tags":["workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-12-at-home-dut-workout-banner.jpg","link":"/news/2018-02-12/at-home-dut-workout/"},{"date":"2018-02-08","title":"Ideal Post Workout Nutrition","author":"Kat Barefield","tags":["health","workout"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-08-post-workout-meal-banner.jpg","link":"/news/2018-02-08/post-workout-meal/"},{"date":"2018-02-07","title":"Fit for Survival","author":"UFC GYM Team","tags":["events"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-07-ufc-gym-bear-grylls-banner.jpg","link":"/news/2018-02-07/ufc-gym-bear-grylls/"},{"date":"2018-02-06","title":"What to Expect in a UFC GYM D.U.T Class","author":"Jake Harfman","tags":["workout","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-06-what-to-expect-in-a-ufc-gym-dut-class-banner.jpg","link":"/news/2018-02-06/what-to-expect-in-a-ufc-gym-dut-class/"},{"date":"2018-02-05","title":"Why Kickboxing is My Go To Workout","author":"Vinay Khurana","tags":["workout","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-05-why-kickboxing-is-my-go-to-workout-banner.jpg","link":"/news/2018-02-05/why-kickboxing-is-my-go-to-workout/"},{"date":"2018-02-01","title":"Boxing For Kids","author":"Rob McCullough","tags":["workout","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-02-01-boxing-for-kids-banner.jpg","link":"/news/2018-02-01/boxing-for-kids/"},{"date":"2018-01-31","title":"UFC GYM Podcast Episode 01- Mike Bisping","author":"UFC GYM Team","tags":["podcast","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-01-31-ufc-gym-podcast-episode-1-banner.jpg","link":"/news/2018-01-31/ufc-gym-podcast-episode-1/"},{"date":"2018-01-29","title":"Boxing For Women","author":"Shanie Rusth","tags":["workout","lifestyle","box"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-01-29-boxing-for-women-banner.jpg","link":"/news/2018-01-29/boxing-for-women-0/"},{"date":"2018-01-25","title":"How Boxing Changed Me","author":"Ann Najjar","tags":["lifestyle","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-01-25-how-boxing-changed-me-banner.jpg","link":"/news/2018-01-25/how-boxing-changed-me/"},{"date":"2018-01-24","title":"What to Expect in a UFC GYM Boxing Class","author":"Thomas Pho","tags":["workout","lifestyle","box","mma"],"banner":"https://ufcgymweb.blob.core.windows.net/ufcgym-web/news/2018-01-24-what-to-expect-in-a-ufc-gym-boxing-class-banner.jpg","link":"/news/2018-01-24/what-to-expect-in-a-ufc-gym-boxing-class-0/"}]')},364:function(e,t,n){var o=n(5),r=n(16),l=n(44),w=/"/g,c=function(e,t,n,o){var r=String(l(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(o).replace(w,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),o(o.P+o.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);