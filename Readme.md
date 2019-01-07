
## This Lightning custom datepicker for Salesforce c:customDatePicker

#### This datepicker is a customisable of the datepicker that fit all your projects. 
#### See below to discover all customisable components.

> **Note:** This component uses Javascript without third-party frameworks and libraries but it using SLDS.


# API
   
### currentDate
 - The current date
`for example currentDate="2015-01-18"`

        
###  Format
 - date format displayed in datePicker
`for example format="MMM dd, YYYY"`
- default value "MMM dd, YYYY"

### Label
- set laber for datepicker

### Header
- It allows or denies display of a header with a full description of the date.
 - default header="true"

### Color
- This attribute set the color styles as the background and color
 - default bgcolor="rgb(194, 57, 52)" color="white"

###  Format day
- This attribute identifies the beginning of the week.
`Euro - starts from Monday, USA - starts from Sunday`
 - default formatDay="USA"

###  Animation
- This attribute enable or disable animation.
`animation = "true"`
 - default animation = "false"

###  EnablePicker
- This attribute enable or disable datePicker.
`datePicker = "true"`
 - default datePicker = "true"

## new Version 2.0:
 **What's new?** 

 - Added mobile datePicker version (custom modal window)
 - improved animation 
 - improved code and checked mistakes in the component (fully dynamic component)
 - Link Package Version Custom Datepicker Lightning Challenge, v2.0 [https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6F0000045VIy](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6F0000045VIy&isdtp=p1)

## Demos & Examples:
#### mobile version (Salesforce 1):
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2018-12-18" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![m1](https://user-images.githubusercontent.com/7148763/50772216-19e3c100-129e-11e9-9ca3-21fe360d38b1.png)
![m2](https://user-images.githubusercontent.com/7148763/50772218-19e3c100-129e-11e9-874a-7e9b2db6c869.png)
![m3](https://user-images.githubusercontent.com/7148763/50772219-1a7c5780-129e-11e9-8727-0d4545e7b9b3.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2018-11-25"  header="true" formatDay="Euro"/>
```

![m4](https://user-images.githubusercontent.com/7148763/50772252-3253db80-129e-11e9-9ce4-59468af13c55.png)


####  PC version:
```
<c:customDatePicker header="true"/>
```
![p1](https://user-images.githubusercontent.com/7148763/50772263-3e3f9d80-129e-11e9-98d6-eb028f99001f.png)
![p2](https://user-images.githubusercontent.com/7148763/50772264-3ed83400-129e-11e9-8396-e95eb721f878.png)
![p3](https://user-images.githubusercontent.com/7148763/50772266-40096100-129e-11e9-9908-5510adb70242.png)
```
<c:customDatePicker currentDate="2019-01-19" format="MMM dd, YYYY"  enablePicker="false" label="False enable DatePicker"/>
```
![p22](https://user-images.githubusercontent.com/7148763/50772276-4a2b5f80-129e-11e9-8103-bbcde1613eb0.png)
```
<c:customDatePicker bgcolor="yellow" color="green" header="true" enablePicker="true"/>
```
![p33](https://user-images.githubusercontent.com/7148763/50772292-54e5f480-129e-11e9-883c-ced49f542217.png)
```
<c:customDatePicker animation="true" bgcolor="#16171529" currentDate="2018-12-18" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![p44](https://user-images.githubusercontent.com/7148763/50772301-5dd6c600-129e-11e9-8bf4-feff6927d5bc.png)
```
<c:customDatePicker formatDay="Euro" bgcolor="black" color="yellow" format="YYYY/MM, DD" header="false" />
```
![p55](https://user-images.githubusercontent.com/7148763/50772314-6929f180-129e-11e9-8815-f07793e302bf.png)
![p56](https://user-images.githubusercontent.com/7148763/50772316-6929f180-129e-11e9-8261-c94054462522.png)
![p57](https://user-images.githubusercontent.com/7148763/50772318-69c28800-129e-11e9-892b-4659a0a9d594.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2018-11-25"  header="true" formatDay="Euro"/>
```
![p66](https://user-images.githubusercontent.com/7148763/50772334-734bf000-129e-11e9-9b08-b183e281fff8.png)
![p67](https://user-images.githubusercontent.com/7148763/50772335-73e48680-129e-11e9-8359-17b7a45fbe68.png)
![p68](https://user-images.githubusercontent.com/7148763/50772333-734bf000-129e-11e9-8cac-e518b6e5eec4.png)
