---
title: "The Fish Eye Project"
date: 2023-12-13T22:05:21+05:30
draft: false
tags: ["tech"]
---

I want to share my new idea. It is, **The Fish Eye Project**. 

This idea is simply a camera app which will record a video and backup it to a
cloud storage in real time. It's like facebook or youtube live, but for personal
purposes. Especially, privacy is preserved with encryption.

Now, for whom this app is for? For everyone. To better explain, I'll grab
an example scenario. Think of you being in a situation where you went shopping
and all of a sudden, the security guard accuses you of shoplifting and demand to
search you. You obviously didn't shoplift. Due to the guard being physically fit
than you, you can't do anything against him, but if you could record the
situation, it might help you in the future.

So you starts recording only to get the recording deleted by the guard. 

Lucky for me, I've
never being through such situations, but I've heard of many. 

There's a very
real possiblity something like this could happen to you or to me.

Fish Eye tries to solve this problem by uploading the footage to the cloud in real
time. Only solutions as of AFAIK are those live
streams provided by social media, but the usecase of that feature stands for a
completely different thing. It's not for recording evidences. That's why I
decided to build this app.

Main features I have in my mind are,

* Real time backup to the cloud
* Encryption
* Seperate password to delete the video
* Dead-man's timer

I'll explain each briefly.

### Real time backup to cloud

I don't think I have to explain this in deep. 

Right now, I don't know how to do this, but I assume I have to record the video
in chucks, let's say in 30 second chunks, then encrypt it and upload it to
cloud. I'll mention about encryption later.

### Encryption

Encryption gives user the chance to trust the server operators. Also, it makes
sure video will be safe from bad actors. Each video chunk coming to the server is
encrypted. 

I'm planning to implement a signing mechanism too. In short, video chunk is not
just encrypted, but signed with the private key of the user so that the server
can check the signature and decide whether to accept the chunk or it's just a
spam data packet send by a DDOS attacker. With the signature mechanism, it's
possible to authenticate the user without using an access token or a cookie.

### Seperate password to delete the video

This is important. If the aggressor in above case can just grab the
phone and get the access token or a password which gives full controll over the
video, whole purpose of the app will be defeated. So, I'm planning to implement
a seperate password to delete the video. This password will be asked when the
user tries to delete the video. User is supposed to keep this password a secret
so the video will not get deleted by unintended people.

### Dead man's timer

Assume the user is in a dangerous situation. A corrupted police officer arrest
him and take him away illegally and torture him.

Even though the authenticity is unknown, I've heard these kind of stories on social
media during the last year protest period.

That's where the deadman's timer comes in handy. User can set a timer, let's
say 10 hours. If the timer is triggered, it'll send a notification to the user's
trusted contacts that the user is recorded a video. It's the user's
responsibility to let the contact know of the decryption password for his videos.

The timer will trigger as soon as the user stops recording. 

User can manually turn off the timer before the timer triggers.

<div class="hr"></div>

I think the server needs to accept any encrypted blob, check it's signature
and save it in the respective folder and also implement other functionalities
like deleting the video, etc. I think the client side is more complicated.

Client side is responsible for recording the video, encrypt it, sign it and upload.
Also it's the client's responsibility to process all chunks and merge them into a
single video since the server only accepts encrypted blobs. It's the client who
has access to the decrypted content.

For now, that's all. I'll update as I progress.

If anyone wants to contribute, please contact me. Email is in my contact page.
If you know me in real life, you might also have my phone number. Just text
then.

<div class="hr"></div>

P.S: I'm not a english professor. If you find any grammatical errors or spelling
mistakes, sorry for that. If I spell "secrete" instead of "secret", don't ask
stupid questions like why did I misspell it. It's just a typo.