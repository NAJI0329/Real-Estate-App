This will be one of the great title app of the US.

# Installation instructions
## Android
1. Clone the repo
2. run **yarn** command in the project directory
3. Open your favourite android simulator and make sure it is up and running
4. go to android folder in terminal and sync the gradlew with the command **gradlew clean**
6. go to the project main directory and run **yarn start**
7. open the project main directory in another command line window and run **yarn run android**
8. It should open the project in the android emulator.

### If it fails, make sure:
1. Your emulator is correctly connected
2. You can uninstall previous apps similar to this one, forexample if you have run this app before, try uninstalling that app on the emulator and then re run the command again
3. Also make sure you have correct react native version

## IOS
1. Clone the repo
2. run **yarn** command in the project directory
3. Open your xcode
4. Open the Project.xcworkspace folder from ios directory and open it in xcode
3. Navigate to Signing&capabilities tab and change the bundle identifier in all 2 fields to ***com.project***
4. navigate to info tab and in url types, click + to add new url type.
5. in url schemes field, add the reversed client id for this project: ***com.googleusercontent.apps.38589584158-h09c1ocjihjfvao929o8qrjc0d3nb47p*** for google authentication to work
6. quit and reopen the xcode
7. navigate to the ios folder in terminal and run command ***bundle install*** first
8. Then run the command ***pod install*** in the same ios directory
8. After navigate to project main directory and run ***yarn ios***
9. Make sure metro is running so before ***yarn ios*** you can first run ***yarn start*** if metro is not running


# If you face any issue, contact the developer for other help
