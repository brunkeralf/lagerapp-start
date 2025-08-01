# Proguard rules for React Native
-keep class com.facebook.react.** { *; }
-keepclassmembers class * {
    @com.facebook.react.uimanager.annotations.ReactProp <methods>;
}
-dontwarn com.facebook.react.**
