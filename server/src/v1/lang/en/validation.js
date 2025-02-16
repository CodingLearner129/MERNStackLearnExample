export default {
    validation_error: "Validation Error",
    first_name: {
        // required: "First name is required.",
        required: "Please enter First Name.",
        string: "First name must be a string.",
        minLength: "First name must have at least 2 characters.",
        maxLength: "First name cannot exceed 50 characters."
    },
    last_name: {
        // required: "Last name is required.",
        required: "Please enter Last Name.",
        string: "Last name must be a string.",
        minLength: "Last name must have at least 2 characters.",
        maxLength: "Last name cannot exceed 50 characters."
    },
    email: {
        // required: "Email Address is required.",
        required: "Please Enter Email Address.",
        string: "Email Address must be a string.",
        email: "Invalid email Address format.",
        minLength: "Email Address must have at least 5 characters.",
        maxLength: "Email Address cannot exceed 320 characters.",
        unique: "Email Address already exists."
    },
    password: {
        required: "Password is required.",
        minLength: "Password must have at least 8 characters.",
        maxLength: "Password cannot exceed 15 characters.",
        upperLetterPassword: "Password must contain at least one uppercase letter.",
        lowerLetterPassword: "Password must contain at least one lowercase letter.",
        digitPassword: "Password must contain at least one digit.",
        specialLetterPassword: "Password must contain at least one special character.",
        pattern: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
    },
    current_password: {
        required: "Current Password is required.",
        minLength: "Current Password must have at least 8 characters.",
        maxLength: "Current Password cannot exceed 15 characters.",
        upperLetterPassword: "Current Password must contain at least one uppercase letter.",
        lowerLetterPassword: "Current Password must contain at least one lowercase letter.",
        digitPassword: "Current Password must contain at least one digit.",
        specialLetterPassword: "Current Password must contain at least one special character.",
        pattern: 'Current Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
    },
    new_password: {
        required: "New Password is required.",
        minLength: "New Password must have at least 8 characters.",
        maxLength: "New Password cannot exceed 15 characters.",
        upperLetterPassword: "New Password must contain at least one uppercase letter.",
        lowerLetterPassword: "New Password must contain at least one lowercase letter.",
        digitPassword: "New Password must contain at least one digit.",
        specialLetterPassword: "New Password must contain at least one special character.",
        differentPassword: "New password must be different from the current password.",
        pattern: 'New Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
    },
    page: {
        required: "Page is required.",
        min: "Page must be greater than 0.",
        max: "Page cannot exceed :value.",
        integer: "Page must be an integer."
    },
    size: {
        required: "Size is required.",
        min: "Size must be greater than 0.",
        max: "Size cannot exceed :value.",
        integer: "Size must be an integer."
    },
    confirm_password: {
        required: "Confirm Password is required.",
        same: "Confirm password must match the new password.",
    },
    image: {
        image: "Please upload a valid image file.",
        required: "Image is required"
    },
    email_exists: "The email address you entered is already registered. Please use a different email address.",
    country_code: {
        required: "Please Select Country Code.",
        // required: "Country Code is required.",
        string: "Country Code must be a string.",
    },
    country_flag: {
        required: "Please Select Country Flag.",
        // required: "Country Flag is required.",
        string: "Country Flag must be a string.",
    },
    phone: {
        // required: "Mobile number is required.",
        required: "Please Enter Mobile Number.",
        integer: "Mobile number must be a integer.",
        minLength: "Mobile number must have at least 10 digits.",
        maxLength: "Mobile number cannot exceed 12 digits."
    },
    token: {
        required: "Token is required.",
        string: "Token must be a string.",
    },
    firebase_token: {
        required: "Firebase Token is required.",
        string: "Firebase Token must be a string.",
    },
    device_token: {
        required: "Device Token is required.",
        string: "Device Token must be a string.",
    },
    gender: {
        // required: "Gender is required.",
        required: "Please Select Gender.",
    },
    dob: {
        required: "Date of birth is required.",
        integer: "Date of birth must be integer.",
    },
    bio: {
        required: "Bio is required.",
        string: "Bio must be a string.",
        minLength: "Bio must have at least 2 characters.",
        maxLength: "Bio cannot exceed 280 characters.",
    },
    height: {
        required: "Height is required.",
        decimal: "Height must be decimal number.",
    },
    height_type: {
        required: "Height Type is required.",
    },
    weight: {
        required: "Weight is required.",
        decimal: "Weight must be decimal number.",
    },
    weight_type: {
        required: "Weight Type is required.",
    },
    dietary: {
        required: "Dietary Type is required.",
    },
    postcode: {
        required: "Postcode Type is required.",
        string: "Postcode must be a string.",
    },
    address: {
        required: "Address is required.",
        string: "Address must be a string.",
    },
    latitude: {
        required: "Latitude is required.",
        decimal: "Latitude must be decimal number."
    },
    longitude: {
        required: "Longitude is required.",
        decimal: "Longitude must be decimal number."
    },
    fitness_goals: {
        required: "Fitness goals is required.",
        array: "Fitness goals must be array.",
    },
    profile: {
        required: "Profile is required.",
        string: "Profile must be a string.",
        object: "Profile must be a object.",
    },
    deleted_profile: {
        required: "Deleted Profile is required.",
        string: "Deleted Profile must be a string.",
        object: "Deleted Profile must be a object.",
    },
    insta_link: {
        required: "Instagram link is required.",
        string: "Instagram link must be a string.",
    },
    social_id: {
        required: "Social Id is required.",
        integer: "Social Id must be an integer."
    },
    social_type: {
        required: "Social Type is required.",
        string: "Social Type must be a string.",
    },
    plan_type: {
        required: "Plan type is required.",
        decimal: "Plan type must be decimal number."
    },
    plan_start_date: {
        required: "Start date is required.",
        decimal: "Start date must be decimal number."
    },
    plan_expiry_date: {
        required: "Expiry date is required.",
        decimal: "Expiry date must be decimal number."
    },
    joined: {
        required: "Joined is required.",
        boolean: "Joined must be boolean."
    },
    community_id: {
        required: "Community Id is required.",
        string: "Community Id must be a string."
    },
    post_id: {
        required: "Post Id is required.",
        string: "Post Id must be a string."
    },
    search_string: {
        required: "Search String is required.",
        string: "Search String must be a string."
    },
    recaptchaToken: {
        required: "recaptchaToken is required.",
        string: "recaptchaToken must be a string."
    },
    sessionInfo: {
        required: "sessionInfo is required.",
        string: "sessionInfo must be a string."
    },
    otp: {
        required: "OTP is required.",
    },
    all: {
        required: "All is required.",
        boolean: "All must be boolean."
    },
    running_club_id: {
        required: "Running club id is required.",
        string: "Running club id must be a string."
    },
    title: {
        required: "Title is required.",
        string: "Title must be a string.",
        maxLength: "Title cannot exceed 120 characters."
    },
    description: {
        required: "Description is required.",
        string: "Description must be a string.",
        minLength: "Description must have at least 10 characters.",
        maxLength: "Description cannot exceed 500 characters."
    },
    created_by: {
        required: "Created by is required.",
        string: "Created by must be a string."
    },
    images: {
        required: "The list of images is required.",
        array: "The list of images must be in array.",
        length: "A maximum of 5 images are allowed.",
        each: {
            required: "Image is required.",
            string: "Image must be a string.",
        }
    },
    deleted_images: {
        required: "The list of deleted images is required.",
        array: "The list of deleted images must be in array.",
        length: "A maximum of 5 deleted images are allowed.",
        each: {
            required: "Image is required.",
            string: "Image must be a string.",
        }
    },
    start_qr_code: {
        required: "Start QR code is required.",
        string: "Start QR code must be a string."
    },
    end_qr_code: {
        required: "End QR code is required.",
        string: "End QR code must be a string."
    },
    comment: {
        required: "Comment is required.",
        string: "Comment must be a string."
    },
    tagged_users: {
        required: "The list of tagged users is required.",
        array: "The list of tagged users must be in array.",
        user_name: {
            required: "User name is required.",
            string: "User name must be a string.",
        },
        user_type: {
            required: "User type is required.",
            string: "User type must be a string.",
        },
        user_id: {
            required: "User id is required.",
            string: "User id must be a string.",
        },
    },
    user_id: {
        required: "User id is required.",
        string: "User id must be a string.",
    },
    comment_id: {
        required: "Comment id is required.",
        string: "Comment id must be a string.",
    },
    sub_comment_id: {
        string: "Sub comment id must be a string.",
    },
    is_liked: {
        required: "Is liked is required.",
        boolean: "Is liked must be boolean."
    },
    is_blocked: {
        required: "Is blocked is required.",
        boolean: "Is blocked must be boolean."
    },
    reported_type: {
        required: "Report type is required.",
        string: "Report type must be a string.",
    },
    reported_description: {
        required: "Report description is required.",
        string: "Report description must be a string.",
    },
    file: "Please upload file.",
    file_name: {
        required: "File Name is required.",
        string: "File Name must be a string.",
    },
    file_path: {
        required: "File Path is required.",
        string: "File Path must be a string.",
    },
    storage_type: {
        required: "Storage Type is required.",
        string: "Storage Type must be a string.",
    },
    _id: {
        required: "Id is required.",
        string: "Id must be a string.",
    },
    event_id: {
        required: "Event id is required.",
        string: "Event id must be a string.",
    },
    allow_notification: {
        required: "Allow notification is required.",
        boolean: "Allow notification must be boolean."
    },
    allow_dm: {
        required: "Allow dm is required.",
        boolean: "Allow dm must be boolean."
    },
    notification_id: {
        required: "Notification id is required.",
        boolean: "Notification id must be string."
    },
    os_type: {
        required: "OS type is required.",
        integer: "OS type must be integer.",
    },
    message: {
        required: "Message is required.",
        string: "Message must be a string.",
        minLength: "Message must have at least 1 characters.",
        maxLength: "Message cannot exceed 65,536 characters."
    },
    sender_type: {
        required: "Sender type is required.",
        string: "Sender type must be a string.",
    },
    sender_id: {
        required: "Sender id is required.",
        string: "Sender id must be a string.",
    },
    receiver_type: {
        required: "Receiver type is required.",
        string: "Receiver type must be a string.",
    },
    receiver_id: {
        required: "Receiver id is required.",
        string: "Receiver id must be a string.",
    },
    leaderboard_type: {
        required: "Leaderboard type is required.",
        integer: "Leaderboard type must be a number.",
    },
    leaderboard_date: {
        required: "Leaderboard date is required.",
        integer: "Leaderboard date must be a number.",
    },
    offset: {
        required: "Offset is required.",
        integer: "Offset must be a number.",
    },
    receipt_data: {
        required: "Receipt data is required.",
        string: "Receipt data must be a string.",
    },
    plan_id: {
        required: "Plan Id is required.",
        string: "Plan Id must be a string.",
    },
    subscription_data: {
        required: "Subscription data is required.",
        array: "Subscription data must be an array.",
        orderId: {
            required: "Order Id is required.",
            string: "Order Id must be a string.",
        },
        packageName: {
            required: "Package name is required.",
            string: "Package name must be a string.",
        },
        productId: {
            required: "Product Id is required.",
            string: "Product Id must be a string.",
        },
        purchaseTime: {
            required: "Purchase time is required.",
            integer: "Purchase time must be a number.",
        },
        purchaseState: {
            required: "Purchase state is required.",
            integer: "Purchase state must be a number.",
        },
        purchaseToken: {
            required: "Purchase token is required.",
            string: "Purchase token must be a string.",
        },
        obfuscatedAccountId: {
            required: "obfuscatedAccountId is required.",
            string: "obfuscatedAccountId must be a string.",
        },
        obfuscatedProfileId: {
            required: "obfuscatedProfileId is required.",
            string: "obfuscatedProfileId must be a string.",
        },
        quantity: {
            required: "Quantity is required.",
            integer: "Quantity must be a number.",
        },
        autoRenewing: {
            required: "Auto renewing is required.",
            boolean: "Auto renewing must be a boolean.",
        },
        acknowledged: {
            required: "Acknowledgement is required.",
            boolean: "Acknowledgement must be a boolean.",
        },
    },
    no_of_tickets: {
        required: "No of tickets is required.",
        decimal: "No of tickets must be decimal number."
    },
    price_per_ticket: {
        required: "Price per ticket is required.",
        decimal: "Price per ticket must be decimal number."
    },
    ticket_amount: {
        required: "Ticket amount is required.",
        decimal: "Ticket amount must be decimal number."
    },
    tax_in_percentage: {
        required: "Tax in percentage is required.",
        decimal: "Tax in percentage must be decimal number."
    },
    tax_amount: {
        required: "Tax amount is required.",
        decimal: "Tax amount must be decimal number."
    },
    final_amount: {
        required: "Final amount is required.",
        decimal: "Final amount must be decimal number."
    },
    workout_type: {
        required: "Workout type is required.",
        integer: "Workout type must be a number.",
    },
    level: {
        required: "Level is required.",
        integer: "Level must be a number.",
    },
    day: {
        required: "Day is required.",
        integer: "Day must be a number.",
    },
    week: {
        required: "Week is required.",
        integer: "Week must be a number.",
    },
    workout_program_id: {
        required: "Workout program id is required.",
        string: "Workout program id must be a string.",
    },
    workout_video_library_id: {
        required: "Workout video library id is required.",
        string: "Workout video library id must be a string.",
    },
    started_at: {
        required: "Started at is required.",
        integer: "Started at be a number.",
    },
    completed_at: {
        required: "Completed at is required.",
        integer: "Completed at be a number.",
    },
    workout_program_plan_id: {
        required: "Workout program plan id is required.",
        string: "Workout program plan id must be a string.",
    },
    manage_workout_id: {
        required: "Manage workout id is required.",
        string: "Manage workout id must be a string.",
    },
    program_type: {
        required: "Program type is required.",
        integer: "Program type be a number.",
    },
    chat_id: {
        required: "Chat id is required.",
        string: "Chat id must be a string.",
    },
    conversation_id: {
        required: "Conversation id is required.",
        string: "Conversation id must be a string.",
    },
    coach_id: {
        required: "Coach id is required.",
        string: "Coach id must be a string.",
    },
    coach_event_id: {
        required: "Coach event id is required.",
        string: "Coach event id must be a string.",
    },
}