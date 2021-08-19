public class ThemeTest { 

@auraEnabled 
public static String getUIThemeDescription() { 
String theme = UserInfo.getUiThemeDisplayed(); 
return theme; 
} 
}