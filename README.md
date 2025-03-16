### How It Works

The `AboutSectionOne` and `AboutSectionTwo` components have been updated to dynamically load data from Firebase Firestore. Here's a brief explanation of how it works:

1. **Firebase Configuration**: The Firebase configuration is set up in firebase.ts using environment variables.
2. **Fetching Data**: In both `AboutSectionOne` and `AboutSectionTwo`, the `useEffect` hook is used to fetch data from Firestore when the component mounts. The `getDocs` function retrieves documents from the specified Firestore collection (`aboutSectionOne` and `aboutSectionTwo` respectively).
3. **State Management**: The fetched data is stored in the component's state using the `useState` hook.
4. **Rendering Data**: The data is then mapped and rendered dynamically within the component's JSX.

### Firestore Collections

To manage the content of the About sections from the admin side, you need to create the following collections in your Firestore database:

1. **aboutSectionOne**:
   - **Document Structure**:
     ```json
     {
       "title": "Section Title",
       "description": "Section Description",
       "text": "List Item Text"
     }
     ```
   - **Example Document**:
     ```json
     {
       "title": "About Us",
       "description": "We are a company that values excellence.",
       "text": "Our mission is to provide the best service."
     }
     ```

2. **aboutSectionTwo**:
   - **Document Structure**:
     ```json
     {
       "title": "Section Title",
       "description": "Section Description"
     }
     ```
   - **Example Document**:
     ```json
     {
       "title": "Our Vision",
       "description": "To be the leading provider of quality services."
     }
     ```

### Steps to Add Data from Admin Side

1. **Go to Firestore Database**: Navigate to the Firestore section in your Firebase console.
2. **Create Collections**: Create two collections named `aboutSectionOne` and `aboutSectionTwo`.
3. **Add Documents**: Add documents to these collections with the structure mentioned above.
4. **Deploy Changes**: Ensure your environment variables are correctly set up and deploy your changes.

By following these steps, you can dynamically manage the content of the About sections from the Firebase Firestore database.

##To Be done client side means in this project

# Updated Firebase Collections Structure for UI Customization

## About and Services

### `aboutSectionOne`
- **Purpose**: Stores content for the first about section.
- **Fields**:
  - `title`: String - Section title
  - `description`: String - Section description
  - `text`: String - Additional content/list items

### `aboutSectionTwo`
- **Purpose**: Stores content for the second about section.
- **Fields**:
  - `title`: String - Section title
  - `description`: String - Section description

### `services` (Updated)
- **Purpose**: Stores service items that can be added, edited, or deleted.
- **Fields**:
  - `title`: String - Service title
  - `description`: String - Service description
  - `image`: String - Data URI of the service image
  - `price`: String - Price of the service in rupees (₹)

## Landing Page

### `landingVideo`
- **Purpose**: Stores video section content.
- **Fields**:
  - `url`: String - Video URL
  - `title`: String - Video title
  - `description`: String - Video description
  - `thumbnail`: String - Data URI of the video thumbnail image

### `featureTab`
- **Purpose**: Stores feature tab header content.
- **Fields**:
  - `title`: String - Feature tab title
  - `description`: String - Feature tab description

### `features`
- **Purpose**: Stores individual feature items (max 6).
- **Fields**:
  - `title`: String - Feature title
  - `description`: String - Feature description
  - `icon`: String - Data URI of the feature icon

### `testimonials`
- **Purpose**: Stores testimonial items.
- **Fields**:
  - `title`: String - Testimonial title/name
  - `description`: String - Testimonial content
  - `rating`: Number - Rating (1-5)
  - `icon`: String - Data URI of the testimonial icon/avatar

### `hero`
- **Purpose**: Stores hero section content.
- **Fields**:
  - `title`: String - Hero title
  - `description`: String - Hero description
  - `button1Text`: String - First button text
  - `button1Url`: String - First button URL/route
  - `button2Text`: String - Second button text
  - `button2Url`: String - Second button URL/route

## Terms and Policies

### `policies`
- **Purpose**: Stores different policy contents.
- **Fields**:
  - `type`: String - Policy type (terms, privacy, cookies)
  - `content`: String - Rich text content (HTML)
  - `createdAt`: Timestamp - Creation date
  - `updatedAt`: Timestamp - Last update date

## About and Services

### `aboutSectionOne`
- **Purpose**: Stores content for the first about section.
- **Fields**:
  - `title`: String - Section title
  - `description`: String - Section description
  - `text`: String - Additional content/list items

### `aboutSectionTwo`
- **Purpose**: Stores content for the second about section.
- **Fields**:
  - `title`: String - Section title
  - `description`: String - Section description

### `services`
- **Purpose**: Stores service items that can be added, edited, or deleted.
- **Fields**:
  - `title`: String - Service title
  - `description`: String - Service description
  - `image`: String - Data URI of the service image

## Landing Page

### `landingVideo`
- **Purpose**: Stores video section content.
- **Fields**:
  - `url`: String - Video URL
  - `title`: String - Video title
  - `thumbnail`:String - Data URI of the video thumbnail image
  - `description`: String - Video description

### `featureTab`
- **Purpose**: Stores feature tab header content.
- **Fields**:
  - `title`: String - Feature tab title
  - `description`: String - Feature tab description

### `features`
- **Purpose**: Stores individual feature items (max 6).
- **Fields**:
  - `title`: String - Feature title
  - `description`: String - Feature description
  - `icon`: String - Data URI of the feature icon

### `testimonials`
- **Purpose**: Stores testimonial items.
- **Fields**:
  - `title`: String - Testimonial title/name
  - `description`: String - Testimonial content
  - `rating`: Number - Rating (1-5)
  - `icon`: String - Data URI of the testimonial icon/avatar

### `hero`
- **Purpose**: Stores hero section content.
- **Fields**:
  - `title`: String - Hero title
  - `description`: String - Hero description
  - `button1Text`: String - First button text
  - `button1Url`: String - First button URL/route
  - `button2Text`: String - Second button text
  - `button2Url`: String - Second button URL/route

## Terms and Policies

### `policies`
- **Purpose**: Stores different policy contents.
- **Fields**:
  - `type`: String - Policy type (terms, privacy, cookies)
  - `content`: String - Rich text content (HTML)
  - `createdAt`: Timestamp - Creation date
  - `updatedAt`: Timestamp - Last update date
