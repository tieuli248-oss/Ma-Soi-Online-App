# Ma Sói Online — iOS

Project này đóng gói frontend hiện tại thành app iOS bằng Capacitor, giữ nguyên server/Socket.IO đang chạy.

## Cấu hình đã đặt
- App name: **Ma Sói Online**
- Bundle ID tạm: `com.tieuli248.masoionline`
- Frontend: thư mục `www/`
- Server game đang được frontend gọi: `https://ma-soi-bot.onrender.com`
- Icon gốc: `assets/logo-source.png`
- Icon iOS 1024x1024 nền đen: `resources/icon.png`
- Splash: `resources/splash.png`

## Build trên Mac
Cần Node.js + Xcode.

```bash
npm install
npx cap add ios
npm run assets:ios
npm run sync:ios
npm run open:ios
```

Sau đó trong Xcode:
1. Chọn project **App**.
2. Signing & Capabilities -> chọn Apple Team của bạn.
3. Nếu Bundle ID bị trùng, đổi `com.tieuli248.masoionline` thành ID riêng của bạn trong Xcode và `capacitor.config.ts`.
4. Chọn iPhone thật hoặc Simulator -> Run.
5. Muốn TestFlight/App Store: Product -> Archive -> Distribute App.

## Khi sửa frontend sau này
Thay/cập nhật file trong `www/`, rồi chạy:

```bash
npm run sync:ios
```

Không cần sửa server chỉ vì chuyển từ web sang iOS app.
