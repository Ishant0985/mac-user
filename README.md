
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
