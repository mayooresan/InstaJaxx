# InstaJaxx
This is a clone of Instagram. But instead of loading the items from the Instagram API, this application loads from [Unsplash API](https://unsplash.com/developers). The whole UI is built from scrach by looking at a instagram applicaiton. Image resoucres were taken from the internet. 

![Tux, the Linux mascot](https://raw.githubusercontent.com/mayooresan/InstaJaxx/readme/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-07-27%20at%2014.31.39.png)


# Running the application
Please meke sure to setup the react-native in your machine before running this application. Once the setup is ready you can use `npm ios` to run on iOS devices and `npm android` for Android devices.

If you want to run on a specific iOS device you can pass in the device name as `react native run-ios --device "Jay iPhone"`

# Auto Pagination
As you scroll down, the applicaiton is pagination behind the screen to pull new list of images from Unsplash backend using the property of FlatList `onEndReached`. 

# TypeScript
TypeScript template is used for this React Native application which provides more robudness. 

# Redux
Redux is used in the application to store the global state. Also, **Redux Thunk** middleware is used to make asychnrous redux updates. 