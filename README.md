# Datawow Assignment

start service
```sh
cd service
yarn
yarn start:dev
```

start client
```sh
cd client
yarn
yarn dev
```

- login ด้วยชื่ออะไรก็ได้ (ตาม design จริงๆจะเอา jwt หรืออื่นๆมาใช่ร่วมก็ได้)
- สามารถลบ cookie ออกและ refresh(F5) เพื่อให้สามารถ login ใหม่ โดยที่ post ใน filter ใน our blog จะ filter ตาม username
  - คลิกขวา Inspect > Application > Cookies > http://localhost:3000 (จะเจอ username หากได้ login ไปแล้ว)
- ต้องรัน service ก่อนแล้วค่อย create post ใน client หลัง login นะครับ
- พอดีทำเป็น DB แบบ in-memory (ใช้แรมเก็บเป็นข้อมูลชั่วคราวคิดว่าจะเร็วกว่าสำหรับการทำ assignment ครับ) ก็คือถ้า service ถูก re-run ใหม่ ข้อมูลจะหายครับ

## requirement (ที่ผมเข้าใจ)
- feed(home) page ไม่ต้อง login สามารถดู feed ได้
- หากใน feed(home) page ถ้าไม่ได้ login และคลิกปุ่ม create จะต้อง redirect ไปที่ login page
- หาก login แล้วสามารถเข้าไปที่เมนู our blog ได้ ดู blog ที่ตัวเองเคย post ได้ สามารถแก้ไขและลบ post ที่เคย post ไว้ได้
- post detail สามารถ comment ได้ แต่ต้อง login ก่อนถึงจะ comment ได้
- ถ้ายังไม่ได้ login หากมีการคลิกปุ่ม add comment ให้ redirect ไปที่ login page
- หลังจาก post จะต้อง clear values ใน form
- หากมีการแก้ไขจะต้อง default values ให้ใน form เช่นตอนที่ open modal ขึ้นมาหากเป็น post ที่มีข้อมูลอยู่แล้วควรจะ default values ให้
- highlight menu ถ้า pathname ตรงกับ pathname ที่ active อยู่
- ตอนที่ search จะทำ highlight ข้อความ title (อันนี้จะไม่มี filter ด้วย service (เดาตาม figma ที่แค่ highlight คำว่า Be))
- ถ้ามีการ filter ด้วย community จะ filter ด้วย service
- รองรับการแสดง ui แบบ responsive ได้

## ปัญหาที่เจอ
- design ui ใน figma บางอันค่อนข้างงง
- ไม่ได้ optimize code พอสมควรเพราะรีบทำครับ
- ไม่แน่ใจกับการ login อยากให้เป็นแบบไหน jwt, oauth,... บลาๆ
- comment ต้องการ web socket หรือไม่ สำหรับ assignment

## tech stack
- frontend:
  - nextjs (สามารถใช้ api ใน nextjs ในการทำเป็น gateway ได้)
  - tailwind
  - mui
  - react-query
  - react context
- backend:
  - nestjs
  - typeorm (ช่วยจัดการ query โดยที่ไม่ต้องเขียน sql เพราะตัว orm จะจัดการให้)
  - sqlite (in-memory)
  - 
## สามารถเยี่ยมชม project ฝึกหัดของผมได้
[project ฝึกหัด](https://pyr.vercel.app/)

## Resume 
[Resume-Peeraphon Singla 2025.pdf](https://github.com/user-attachments/files/18740868/Resume-Peeraphon.Singla.2025.pdf)
