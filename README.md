# ZTECH NFT Landing Page

![Logo](public/image/logo/logo.png)

## 🚀 Giới thiệu

**ZTECH NFT Landing Page** là website giới thiệu. Giao diện hiện đại, hiển thị tốt trên cả máy tính và điện thoại.

---

## 🖼️ Hình ảnh thực tế

### Giao diện Desktop
![Desktop Screenshot 1](public/image/screenshot/screenshot-desktop-1.png)
![Desktop Screenshot 2](public/image/screenshot/screenshot-desktop-2.png)
![Desktop Screenshot 3](public/image/screenshot/screenshot-desktop-3.png)

### Giao diện Mobile
![Mobile Screenshot 1](public/image/screenshot/screenshot-mobile-1.png)
![Mobile Screenshot 2](public/image/screenshot/screenshot-mobile-2.png)
![Mobile Screenshot 3](public/image/screenshot/screenshot-mobile-3.png)
![Mobile Screenshot 4](public/image/screenshot/screenshot-mobile-4.png)

---

## 🛠️ Công nghệ sử dụng

- **Ngôn ngữ:** TypeScript, JavaScript
- **Framework:** React 19, Vite
- **UI:** Tailwind CSS, Radix UI, Lucide React
- **State & Routing:** React Router DOM
- **Build tool:** Nx Monorepo, Vite
- **Lint & Format:** ESLint, Prettier
- **Triển khai:** GitHub Pages (gh-pages)

---

## 📂 Cấu trúc thư mục

```
src/
  app/         // Cấu hình route, layout, khởi tạo ứng dụng
  assets/      // Tài nguyên tĩnh: fonts, hình ảnh dùng chung
  components/  // Các component giao diện (chia nhỏ theo common, feature, layout, ui...)
  constant/    // Các hằng số, dữ liệu tĩnh (menu, card, slide, ...)
  context/     // React Context cho state toàn cục (ví dụ: NavigationContext)
  hooks/       // Custom React hooks (usePageLoading, useResponsiveVisible, useCarousel...)
  lib/         // Thư viện, hàm tiện ích dùng chung (utils...)
  pages/       // Các trang chính của app (Home, ErrorPage...)
  utils/       // Các hàm xử lý logic, tiện ích riêng biệt (errorUtils...)
public/
  image/       // Ảnh minh họa, logo, banner, NFT
  screenshot/  // Ảnh chụp màn hình thực tế dự án
```

---

## ⚙️ Chức năng chính

- **Trang chủ hiện đại:**  
  - Banner lớn, menu điều hướng, nút đăng ký/đăng nhập nổi bật.
- **New NFT Collections:**  
  - Hiển thị các bộ sưu tập NFT mới nhất với slider đẹp mắt.
- **NFT Drops Calendar:**  
  - Lịch các sự kiện NFT, giúp người dùng không bỏ lỡ các đợt phát hành.
- **Hot NFT & Promotion:**  
  - Khu vực NFT nổi bật và các chương trình khuyến mãi.
- **Responsive:**  
  - Tối ưu hiển thị trên mọi thiết bị (desktop, tablet, mobile).
- **Sidebar & Navigation:**  
  - Sidebar cho mobile, menu điều hướng rõ ràng.
- **Footer:**  
  - Thông tin liên hệ, sản phẩm, tài nguyên, chính sách.

---

## 📝 Hướng dẫn phát triển

1. **Cài đặt:**
   ```sh
   npm install
   ```

2. **Chạy dev:**
   ```sh
   npm start
   # hoặc
   nx run landing-page:dev
   ```

3. **Build production:**
   ```sh
   npm run build
   ```

4. **Triển khai lên GitHub Pages:**
   ```sh
   npm run deploy
   ```

---

## 📧 Liên hệ

- Email: nqnhattrung2001@gmail.com
- Website: [https://Trung112277.github.io/landing-page](https://Trung112277.github.io/landing-page)

---

