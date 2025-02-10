# Datawow-Assignment

- login ด้วยชื่ออะไรก็ได้ (ตาม design จริงๆจะเอา jwt หรืออื่นๆมาใช่ร่วมก็ได้)
- สามารถลบ cookie ออกและ refresh(F5) เพื่อให้สามารถ login ใหม่ โดยที่ post ใน filter ใน our blog จะ filter ตาม username
- ต้องรัน server ก่อนแล้วค่อย create post ใน client หลัง login นะครับ
- พอดีทำเป็น DB แบบ in-memmory (ใช้แรมเก็บเป็นข้อมูลชั่วคราวคิดว่าจะเร็วกว่าสำหรับการทำข้อสอบครับ) ก็คือถ้า server ถูก re-run ใหม่ ข้อมูลจะหายครับ
