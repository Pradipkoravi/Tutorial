#import "DeviceModule.h"
#import <UIKit/UIKit.h>
#import "AppDelegate.h"
@implementation DeviceModule

//export the name of the native module as 'Device' since no explicit name is mentioned
RCT_EXPORT_MODULE();

//exports a method getDeviceName to javascript
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getDeviceName){
 @try{
   NSString *deviceName = [[UIDevice currentDevice] name];
   return(@[[NSNull null], deviceName]);
 }
 @catch(NSException *exception){
   return(@[exception.reason, [NSNull null]]);
 }
}

@end
