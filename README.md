# Unsplash Image Project

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview
The **Unsplash Image Project** is a simple Android application that fetches and displays images from the [Unsplash API](https://unsplash.com/developers). Users can search for images using keywords, and the app will display relevant images in a beautiful UI with dark and light mode support.

## Features
- Fetches images from Unsplash API based on user search queries.
- Supports dark mode and light mode.
- Displays images in a clean and responsive UI.
- Uses modern Android development practices (Kotlin, MVVM, Retrofit, etc.).

## Screenshots
<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/BinyamCheru/Unsplash-Image-project/blob/master/dark%20mode%20screen%20shot.png" width="48%">
    <img src="https://github.com/BinyamCheru/Unsplash-Image-project/blob/master/light%20mode%20screen%20shot.png" width="48%">
</div>

## Technologies Used
- **Kotlin** - Programming language
- **Retrofit** - For making API requests
- **Glide** - For loading images efficiently
- **ViewModel & LiveData** - For managing UI-related data
- **RecyclerView** - For displaying images in a list/grid format

## How to Run the Project
1. Clone this repository:
   ```sh
   git clone https://github.com/BinyamCheru/Unsplash-Image-project.git
   ```
2. Open the project in **Android Studio**.
3. Get an API key from [Unsplash Developers](https://unsplash.com/developers).
4. Add your API key to the project in `local.properties`:
   ```properties
   UNSPLASH_ACCESS_KEY=your_api_key_here
   ```
5. Run the project on an emulator or a real device.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
[Binyam Cheru](https://github.com/BinyamCheru)

I build this project while i learn react by following John Smilga's react course
