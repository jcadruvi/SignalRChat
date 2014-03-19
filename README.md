SignalRChat
===========

LEFT OFF AT TRYING TO GET ADDING A USER TO WORK.

Refactoring:
	Chat controller (onLogInClick).

This is a example chat program using Signal R, MVC, and Web API. The user selects there name and picks the user who they want to send a message too. They type the message and click send. The message is then displayed to the correct user.

Examples I need to look at:
	http://dhavalupadhyaya.wordpress.com/tag/signalr-chat-example/
	http://www.hanselman.com/blog/AsynchronousScalableWebApplicationsWithRealtimePersistentLongrunningConnectionsWithSignalR.aspx
	http://www.codeproject.com/Articles/562023/Asp-Net-SignalR-Chat-Room

Node links:
	http://www.hanselman.com/blog/InstallingAndRunningNodejsApplicationsWithinIISOnWindowsAreYouMad.aspx
	
	
UI Notes:

I should change the UI to use Bootstrap. The following are some notes:

1) The chat area should use tabs with pills and badge. When you recieve a message the badge should flash read.
2) When you recieve a message a pop ovrr with the message should show from the bottom right of the web page.
3) The users section should change to a list group with badges. When you geta message badge should flash red.
4) Look into having the tabs with a close button.
	http://jeykeu.wordpress.com/2013/07/27/dynamically-add-remove-and-re-number-tabs-in-twitter-bootstrap/
	http://junaidbaloch.com/backyard/bootstrap_add_rmove_tabs/
5) Make the UI use angular js.



Client:
	Talk about the signalRService.

Server:

Talk about Dependency Injection for SignalR.
	Must be singleton
	Hub Activator.
	
