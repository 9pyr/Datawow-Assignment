# Datawow-Assignment

- login ด้วยชื่ออะไรก็ได้ (ตาม design จริงๆจะเอา jwt หรืออื่นๆมาใช่ร่วมก็ได้)
- สามารถลบ cookie ออกและ refresh(F5) เพื่อให้สามารถ login ใหม่ โดยที่ post ใน filter ใน our blog จะ filter ตาม username
- ต้องรัน service ก่อนแล้วค่อย create post ใน client หลัง login นะครับ
- พอดีทำเป็น DB แบบ in-memory (ใช้แรมเก็บเป็นข้อมูลชั่วคราวคิดว่าจะเร็วกว่าสำหรับการทำ assignment ครับ) ก็คือถ้า service ถูก re-run ใหม่ ข้อมูลจะหายครับ

## tech stack
- frontend: nextjs (สามารถใช้ api ใน nextjs ในการทำเป็น gateway ได้)
- backend: nestjs

## requirement (ที่ผมเข้าใจ)
- feed(home) page ไม่ต้อง login สามารถดู feed ได้
- หากใน feed(home) page ถ้าไม่ได้ login และคลิกปุ่ม create จะต้อง redirect ไปที่ login page
- หาก login แล้วสามารถเข้าไปที่เมนู our blog ได้ ดู blog ที่ตัวเองเคย post ได้ สามารถแก้ไขและลบ post ที่เคย post ไว้ได้
- post detail สามารถ comment ได้ แต่ต้อง login ก่อนถึงจะ comment ได้
- ถ้ายังไม่ได้ login หากมีการคลิกปุ่ม add comment ให้ redirect ไปที่ login page
- หลังจาก post จะต้อง clear values ใน form
- หากมีการแก้ไขจะต้อง default values ให้ใน form เช่นตอนที่ open modal ขึ้นมาหากเป็น post ที่มีข้อมูลอยู่แล้วควรจะ default values ให้
- highlight menu ถ้า pathname ตรงกับ pathname ที่ avtive อยู่
- ตอนที่ search จะทำ highlight ข้อความ title (อันนี้จะไม่มี filter ด้วย service (เดาตาม figma ที่แค่ highlight คำว่า Be))
- ถ้ามีการ filter ด้วย community จะ filter ด้วย service

