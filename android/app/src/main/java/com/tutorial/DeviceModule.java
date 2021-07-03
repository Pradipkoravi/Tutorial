package com.tutorial;
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import javax.annotation.Nonnull;

public class DeviceModule extends ReactContextBaseJavaModule {
    public DeviceModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "DeviceModule";
    }

    @ReactMethod
    public void getDeviceName(Promise promise) {
        try{
            String deviceName = Build.MANUFACTURER +" - "+ Build.MODEL;
            promise.resolve(deviceName);
        }catch (IllegalViewOperationException e) {
            promise.reject(e);
        }
    }
}
