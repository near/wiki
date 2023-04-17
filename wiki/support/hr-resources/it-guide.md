---
title: IT Guide
sidebar_label: IT Guide
sidebar_position: 5
---

_The purpose of this handbook is to provide guidelines regarding IT security._

Many of us are not IT experts, so  it is important to educate ourselves on cybersecurity best practices and practicing diligence with systems, tools and websites so as to avoid hacking and viruses.


# Recommendations


## Onboarding:



* Always use strong passwords for all Company Accounts
* Use 1password, protected by a **_very_** strong password, to store secure passwords. Additionally, set up an authenticator app or Yubikey for Multi-Factor Authentication.
* Create a separate account: If you or your employees are using the same laptop for personal use as for work, we suggest you create a new user account on your computer and log into 1 user for work, the other for personal use. Log out of your personal Google account or make sure you use separate Chrome profiles
* Ensure your laptop is encrypted at rest using FileVault (OSX) or Bitlocker (Windows). Don’t assume it came configured correctly.  Backup the recovery keys offline or in a password vault.  Losing an unencrypted laptop is potentially dangerous to you, your company, and can be incredibly frightening
* Always lock your laptop if you are away from it or not in immediate possession of it when in public places.


## External applications 



* Only download secure / well known applications to your phone and laptop . Verify that you are downloading the official application from the correct source.
* It’s ok to utilize “sign in with google” for SaaS platforms, except when they require permissions beyond “get your basic profile.”  Restrict “sign in with Google” to only SaaS apps officially in use by your company. Otherwise, if excessive permissions are requested, use strong passwords with MFA where available. 
* Applications such as Telegram are safe to use but be aware of :
    * Fake “official” pages / groups
    * Attachments / gifs - do not download from chats. Disable automatic downloads.
    * Rampant fraud
    * Confidence scams
* Restrict messaging regarding sensitive company information and transfer requests, etc. to your company’s Slack account or similar.
* Be extremely cautious about installing extensions to your browser.  Extensions like Honey are recording essentially everything you do in your browser.  Do you trust a company with that data?  Other extensions may be poorly developed and thus easily exploited, contain malware designed to steal data, or could be purchased from a developer by malicious actors and become part of a supply-chain hack. In simple terms, don’t install extensions unless you absolutely know what you’re doing. Don’t trust app stores (for your OS or browser) to be able to ensure that the apps they host are safe to use.  


## Crypto security



* Avoid using a named address that contains information that may identify you (no firstnamelastname.near, mascotgradyear.near, etc.) or stick with implicit accounts.
* Feel free to “squat” on crypto addresses with identifiable information to prevent ownership by others, but avoid using them to hold significant token assets or to conduct transactions.
* If you have whatever you consider to be significant assets in a wallet, we strongly advise and urge you to use a Ledger or other form of crypto hardware wallet (cold storage). Only leave a small amount in “hot wallets”such as those where you are able to “recover” within the browser directly through an emailed link or by entering a passphrase. 
* Note that staking tokens has the side effect of providing additional security due to the 2-3 days required to unstake tokens before they become available for transfer. 


## Additional Security Tips

**1. Get a Hardware Wallet for your Crypto Assets**

Using a software interface to a wallet that requires a password or seed phrase is risky, however, because they require you to enter some information that could be compromised.  A hardware wallet, or Ledger as is most commonly used, is the most secure way to access accounts, transfer funds, and protect your private key (the thing that allows you to do anything with your account). A Ledger is a physical device that stores a user's private key inside a dedicated piece of hardware that never transmits your key. Instead it signs transactions with that key.  You can lose or destroy a Ledger without worry, as long as you still have your seed phrase that you used to set up the Ledger, you also have your private key.  That seed phrase can be kept in multiple places, buried, in a safety deposit box, and even encrypted in a file on a CD or DVD.  Most importantly, neither your private key nor your seed phrase should be accessible anywhere online or on a computer when any significant sums are involved. “Significant” is an amount you decide on.

**2.** **Keep Your Private Keys or Recovery Phrases Secure**

Do not store your private keys and recovery phrases online or share them with anyone. In fact, don’t even store them on your computer.  A standard feature of contemporary malware is to search for keys, credentials, and recovery phrases on the devices they infect.  Using a Ledger prevents you from having to store a private key anywhere, as it is on the device and never traverses your device or network when used to approve transactions.

Keep your pass phrases and your Ledger or other cold storage devices safe and secure.  Consider utilizing a safety deposit box or other method for preventing physical access to a device and or recovery phrases so that they can’t be stolen and you cannot be compelled to disclose or unlock them.  

Create an additional wallet or purchase an additional Ledger for “day to day” use, holding a value of assets you can afford to lose.  Fund this from time to time with your more secure wallet(s).  It’s worth noting that if you have an account which was not created with a Ledger, you can always update the account to use a Ledger.

Note, while a Ledger is a powerful tool for securing a wallet, it is possible that it can be hacked or that you can be forced to disclose its pin.  Ensure that your Ledger associated with your most secure wallet is kept somewhere secure at all times.  

Note also that the passphrase associated with a Ledger can be used to recover your private keys on another Ledger–this is by design, so that a failure or the destruction of the device doesn’t cause you to lose access to your accounts.  As a ramification of this, it is absolutely critical that you do not lose the passphrase you used to set up a Ledger or other cold storage device.

Finally, other methods for securing a wallet are available. These  include “multi-sig” and other types of key assignment, but require a more thorough understanding of the risks and operational requirements associated with them.

**3. Use Strong Passwords**

Always use strong passwords when creating accounts.   Never reuse passwords across accounts. Do not use your browser’s password storage feature.  Humans are terrible at remembering and creating strong passwords, so utilize a simpler solution…

**4.** **Use a Password Manager**

Use a trusted and reliable password manager to create, store, and fill all  your passwords.  This achieves a number of objectives and simplifies security.  1Password and LastPass are currently the gold standard. When setting up 1Password, use a very strong passphrase that you can remember.  If you aren’t good at remembering a typical complex password, you can instead  utilize a long passphrase you will not forget, such as (but not this):  

Foolish catapults swim solemnly in retrograde fashion

or 

Correct Horse Battery Staple  

This seems simple, but is very secure.  Do not, however, utilize a common phrase or something taken from a book.  For example, don’t use this:

I came I saw I conquered

See[ ](https://xkcd.com/936/)[Password Strength](https://xkcd.com/936/)  for a fun explanation.

Use MFA with your password manager.  In order of security, you can use a Yubikey Universal Second Factor (U2F) hardware device (and a second as backup in case you lose the primary one), a push notification through the DUO app, or a time-based or HMAC-based one time password application on your phone such as the Google Authenticator or DUO Mobile app.  Why is this important?  Because if your computer is hacked, a malicious actor could capture the passphrase you use to access your password manager and remotely exfiltrate all your stored credentials.

As a final note, ensure you record and secure your secret key. 1Password creates an “emergency kit” when you first create an account. Do not lose this. Physically secure this in a safe place where it cannot be destroyed or discovered.  Lastpass provides a similar mechanism.

**5.** **Use Multi-Factor Authentication BUT NOT SMS Two-Factor Authentication**

Significantly increase your account security with a MFA. We’ve already mentioned the importance of doing this for your password vault, but you should enable multi-factor authentication in every account with which it is available. With this form of increased security in place, it becomes incredibly hard for hackers to use stolen credentials to access your accounts–in most cases this is even true if the device you are logging in with is already compromised.

As mentioned above, MFA can be enabled through push notifications to your phone, one-time password generators (also on your phone), a Yubikey or similar device.  

SMS and email notifications are also forms of MFA.  However, they should not be used. They are simply not secure.  If you use software that only allows for SMS 2FA, you should consider not subscribing.  Sadly, many banks are still using SMS 2FA for security.  

It should also be noted that the “additional factor” should not be used on the same device. Generally the second factor will be on your mobile device (which should be protected with a pin code and also encrypted at rest–standard for most new devices)

One additional method for ensuring account security is to use “Login with Google.”  This isn’t technically MFA, but a set of tools that operate behind the scenes to determine if you are who you say you are, using your device, and that you are supposed to have access to whatever you are attempting to log into .  This is robust, secure, and extremely resistant to hacking.  When it is available, and when apps aren’t asking for excessive data permissions, feel free to use this with your company email account for company-related software.

**6. Cold Storage & Safekeeping**

Are you holding large amounts of crypto for the long term? If so, it's time to move any funds off of any hot wallets and into cold storage. With your private keys stored safely offline, you’ll rest easy with a hardware wallet. Move any crypto that you are not actively trading out of exchange based hot wallets and into more secure wallets like software, desktop or mobile wallets. These types of (hot) wallets are still vulnerable but can be a more secure option. Exchange hacking is a reality. Better to be safe than sorry. 

Natural disasters cannot be prevented, but you can protect your money from disasters. Print all 2FA backup codes, password manager emergency kits and hardware wallet recovery sentences. Then put these items (along with paper wallets and other crypto planning documents) in a safe and fireproof location. You can keep your recovery seed safe from physical damage by engraving it on a steel plate. Engraving tools are fairly inexpensive and are especially worth the investment if you have more than one recovery seed to protect.  Of course, as stated above, Ledgers are your best bet.

**7. Write Your Recovery Sentence Down & Verify **

Make sure all words are spelled correctly and are in the correct order. Then triple-check and test it with a small number of funds.

**8. Never Input Your Recovery Phrase Online**

‍This includes:



* On your phone
* On your computer
* Taking a photo or screenshot
* In an email
* Cloud services, including Google Drive/Dropbox/Evernote‍

When it comes to recovery phrases, simply consider that the device you are using is compromised, and someone can read what you are typing or data you have stored on that device.

**9.** **Choose a Unique PIN**

We recommend a pin that’s 6–9 digits. This should be obvious, but please don’t use important dates that are easy to guess — such as your birthday, or “1–2–3–4.”

**1‍0.** **Be Watchful of Potential Phishing Sites and Emails**

A very common scam technique used by hackers is to create a fake, identical version of the exchange or web wallet page they use and email the link to the victim. The scammers will usually include convincing messages persuading them to log in and take immediate action. Many people then visit these sites, enter their data, and  hackers take this data and do what they want. 

To avoid phishing, always check that the link displayed in your browser perfectly matches the link in your exchange or web wallet. Also ensure you have no certificate warnings and that you are securely connected with HTTPS:// and not HTTP://

**1‍1. Keep Your Device Safe**

Make sure you have the latest version of antivirus and firewall enabled. Do not install any software that you’re not sure about its safety. As good practice, never download any suspicious attachments, and ensure that you research the reputation of the software you're trying to install. Ensure your system is automatically downloading security updates.

**12. Keep your Holdings Private**

It is crucial never to tell anyone how much virtual currency you have. This is especially true when talking to strangers at blockchain tech conferences, cryptocurrency gatherings, and social media.

Also, don’t “signal” that you have significant holdings or wealth. It’s a good way to attract the wrong kind of attention.

The same guidance applies to your family and friends.  Request that they also keep quiet about your holdings.

**13.** **Avoid Public WiFi**

It’s very difficult to determine whether or not an available wifi access point is malicious. Just assume that they are.  While TLS generally prevents snooping on your web sessions, you may not notice a Man in the Middle attack that is able to read everything you transmit.  Many hackers will convince you to install a certificate into your device’s trust store. If you do this, it’s quite possible that you won’t notice that your device has been compromised.

If you need to connect to an unfamiliar access point:



* Never install anything the access point may request you to install
* Never open any document that the access point may attempt to download to your computer
* Never use credentials from other accounts (i.e. gmail) to login to an access point 
* Don’t be fooled into thinking an access point is secure because it requires a password
* Use a VPN. VPNs provide an additional layer of defense from man in the middle attacks and other forms of snooping
* If your VPN is blocked, don’t use the access point.  It’s suspicious at best, and likely malicious.  
* Get a mobile hot spot or use your cell phone as a hot spot (make sure you set a strong password, and don’t tape the password to the hotspot–a common practice)

**14.** **Educate your Friends and Family about Crypto**

Knowledge is power! The more everyone knows about crypto security, the faster we will move toward mass adoption.

**15. Messaging Software Safety**



* Safety on Telegram (_this applies to similar features on other platforms)_:  
    * A reminder that messaging platforms that can share files enable threat actors to easily target entire groups with malware.
    * Recently, there were reports of a RAT (Remote Access Trojan) being distributed by "Smokes Night" on Telegram crypto trading forums.  See the linked report for details.  To be clear, this sort of thing is happening on a continuous basis, and is an example of a very common type of malware.
    * [Threat Report: Echelon Malware Detected in Mobile Chat Forums](https://www.safeguardcyber.com/blog/echelon-malware-crypto-wallet-stealer-malware)
    * TL;DR for the report:  If you have Telegram auto-download enabled (which you probably do--it's the default config), there is a high probability that malware can be dropped and run on your computer and steal your &lt;insert anything>.
    * If your company relies on Telegram make sure your employees configure the following:
        * disable "Automatic Media Download" for chats, groups, and channels under "Advanced" settings on desktop OSes or "Data and Storage" on Android/iPhone . 
        * Enable "Ask download path for each file" which is also under "Advanced settings" on desktops (does not appear on mobile devices). 
        * Do this for all of your devices running telegram.
    * You should know that when auto-download is enabled, clicking on a message with an attached file will open that file. You may or may not get a warning prompt from your OS.
    * With auto-download disabled, you first have to click the down arrow before clicking the message for a file to execute.  This should help prevent accidental execution of files.
    * With "ask download path for each file" enabled, you get an extra "UX" warning that makes it clear you are downloading a file, which also prevents accidental file execution.  It also appears to prevent automatic downloading across the board--but you should still disable Automatic Media Download regardless.
    * If you are installing a fresh copy of Telegram or any messaging platform for that matter, make sure to disable risky configuration defaults before use.
    * As an added layer of protection, consider disabling Auto-download of images as well as Auto-play of media and Streaming.  Every once in a while someone finds a way to exploit a media decoder. This will make Telegram (and other apps) significantly less fun, but more secure.
* Finally, when installing any software--especially software designed for sharing, messaging, etc.--make it a point to walk through the configuration options to ensure that you understand the operating parameters of the default settings--and adjust them where it makes sense.

**16. See Something, Say Something**

It’s a good idea to create a  #Security slack channel and/or email where security concerns can be fielded and handled by your IT staff. 
