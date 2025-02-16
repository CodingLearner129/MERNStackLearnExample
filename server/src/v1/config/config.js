import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
dotenvExpand.expand(dotenv.config());

// get data from .env file
const config = {
    node_env: process.env.NODE_ENV || 'development',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    mongo_db: process.env.MONGO_CLUSTER_DB || '',
    app_name: process.env.APP_NAME || "BTND",

    // bcrypt
    bcrypt_salt_round: Number(process.env.BCRYPT_SALT_ROUND) || 10,

    // set locale for language
    locale: process.env.LOCALE || 'en',

    // set rate limit
    request_data_limit: process.env.REQUEST_DATA_LIMIT || '100kb',

    // file size
    file_size: Number(process.env.FILE_SIZE) || 5,

    // Jwt
    jwt_encryption: process.env.JWT_ENCRYPTION || 'secret',
    jwt_expiration: process.env.JWT_EXPIRATION || '1d',
    jwt_refresh_expiration: Number(process.env.JWT_REFRESH_ENCRYPTION) || 7,

    // mail configuration
    mail_host: process.env.MAIL_HOST || '',
    mail_port: process.env.MAIL_PORT || '',
    mail_username: process.env.MAIL_USERNAME || '',
    mail_password: process.env.MAIL_PASSWORD || '',
    mail_from_address: process.env.MAIL_FROM_ADDRESS || '',
    mail_secure: process.env.MAIL_SECURE === 'true',

    support_email: process.env.SUPPORT_EMAIL_ID || '',

    base_url: process.env.BASE_URL || '',

    // s3 bucket credentials
    awsAccessKey: process.env.AWS_ACCESS_KEY_ID || '',
    awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    awsRegion: process.env.AWS_DEFAULT_REGION || '',
    awsBucket: process.env.AWS_BUCKET || '',
    awsBucketFolder: process.env.AWS_BUCKET_FOLDER || 'staging',
    awsUrl: process.env.AWS_URL || '',
    cloudfrontBaseUrl: process.env.CLOUDFRONT_BASE_URL || '',
    awsUsePathStyleEndpoint: process.env.AWS_USE_PATH_STYLE_ENDPOINT || '',

    // HTTP status codes
    http_status_data_found: 200,
    http_status_create_success: 201,
    http_status_content_not_found: 204,
    http_status_data_not_found: 404,
    http_status_server_error: 500,
    http_status_auth_fail: 403,
    http_status_user_already_exist: 409,
    http_status_bad_request: 400,
    status_success: true,
    status_fail: false,

    // Firebase configuration
    firebaseAPIKey: process.env.FIREBASE_API_KEY || '',
    firebaseServerKey: process.env.FIREBASE_SERVER_KEY || '',
    firebaseServiceAccountPath: process.env.FIREBASE_SERVICE_ACCOUNT_PATH || '',
    playstoreServiceAccountPath: process.env.PLAYSTORE_SERVICE_ACCOUNT_PATH || '',
    firebaseSendOTPUrl: process.env.FIREBASE_API_KEY ? `https://identitytoolkit.googleapis.com/v1/accounts:sendVerificationCode?key=${process.env.FIREBASE_API_KEY}` : '',
    firebaseVerifyOTPUrl: process.env.FIREBASE_API_KEY ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPhoneNumber?key=${process.env.FIREBASE_API_KEY}` : '',

    //iTune secrete
    iTuneURL: 'https://buy.itunes.apple.com/verifyReceipt',
    secret: process.env.ITUNE_CLIENT_SECRET || '',
    androidPackageName: process.env.ANDROID_PACKAGE_NAME || "",

    // Default settings
    default_sound: process.env.DEFAULT_SOUND || 'default',
    reportLimit: Number(process.env.REPORT_LIMIT) || 10,
    tax_in_percentage: Number(process.env.TAX_IN_PERCENTAGE) || 0, // in %
    otp_expiration: Number(process.env.OTP_EXPIRATION) || 60, // in seconds
    max_logger_files_expiration: process.env.MAX_LOGGER_FILES_DURATION || '15d',

    // Stripe configuration
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY || '',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    stripeEndpointSecretKey: process.env.STRIPE_ENDPOINT_SECRET_KEY || '',
    // stripeEndpointSecretKey: process.env.STRIPE_ENDPOINT_SECRET_KEY || '',

    currency: process.env.CURRENCY || 'gbp',

    firebaseApiKey: process.env.FIREBASE_API_KEY || "",
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID || "",
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID || "",
    firebaseAppId: process.env.FIREBASE_APP_ID || "",
    firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID || "",
    corsOriginUris: process.env.CORS_ORIGIN_URIS == "" ? ["http://127.0.0.1:8000"] : (process.env.CORS_ORIGIN_URIS).split(','),
};

export default config;
