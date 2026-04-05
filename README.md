# Rob McIlrath's Portfolio Site

The goal is to keep it simple, but communicate my experience in a nicely formatted front end. The main goal is to show I understand enough about full stack development to tailor a personal portfolio site as well as the wherewithal to host it. And that I care enough to do so--just like a good employee might. 

## Don't Forget

Stuff I'll forget in a few months if I don't write it down. Generally discovered by forgetting it at least once.

### Commands

`npm start`: Starts the site in dev mode.

`npm run build`: Builds it into the `portfolio-site/build` folder. 

### To Update Deployment

`https://hpanel.hostinger.com/` or just `https://hostinger.com/` is our provider. A bit of a weird choice I went with in a spur of the moment choice after successfull YouTube video marketing with a promo code discount and worth changing probably. 

Also a warning, Hostinger seems to love renaming/ shuffling/ updating their UI routinely. Just stumble around and you'll find things. Guide below probably will fall out of date quickly before Step 4. 

To deploy:

1. Log in
2. Under `Websites` look for `www.robmcilrath.com`
3. Find the `File Manager` section under `Tools`
4. Build the site with `npm run build`
5. Delete contents of `/public_html`
6. Copy contents of `/portfolio-site/build` into `/public_html`
