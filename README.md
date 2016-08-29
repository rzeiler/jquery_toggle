# jquery toggle button
Create from ASPX Checkbox WebControl a Toggle Button, with Bootstrap Css Style.


## ASP Page
```asp
<asp:checkbox ID="NewsletterWelcomeCheckBox" CssClass="newsletter" runat="server"></asp:checkbox>
```
## Script Requirements
```asp
<script src="(path)/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="(path)/bootstrap.min.js" type="text/javascript"></script>
<script src="(path)/toggle.js" type="text/javascript"></script>'
```
## Call Function
```asp
<script type="text/javascript">
$('.newsletter').toggleButton(); 
</script>
```
