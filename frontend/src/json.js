const surveyJson = {
    "locale": "fa",
    "title": "پرسشنامه اطلاعات مورد نیاز برای برنامه غذایی",
    "description": "لطفا با دقت پاسخ دهید.",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "text",
          "name": "name",
          "startWithNewLine": false,
          "title": {
           "fa": "نام و نام خانوادگی"
          },
          "titleLocation": "left"
         },
         {
          "type": "text",
          "name": "age",
          "startWithNewLine": false,
          "title": {
           "fa": "سن"
          },
          "titleLocation": "left",
          "inputType": "number"
         }
        ]
       },
       {
        "type": "text",
        "name": "weight",
        "title": {
         "fa": "وزن"
        },
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "height",
        "title": {
         "fa": "قد"
        },
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "marriageAge",
        "title": {
         "fa": "چند سال از ازدواج شما می گذرد؟"
        },
        "inputType": "number"
       },
       {
        "type": "boolean",
        "name": "history",
        "title": {
         "fa": "سابقه ناباروری"
        },
        "labelTrue": {
         "fa": "دارم"
        },
        "labelFalse": {
         "fa": "ندارم"
        }
       },
       {
        "type": "text",
        "name": "prevention",
        "title": {
         "fa": "قبل از بارداری فعلی به چه روش و چه مدت جلوگیری داشته اید؟"
        }
       },
       {
        "type": "text",
        "name": "historyAge",
        "title": {
         "fa": "سابقه ی ناباروری شما در صورتی که ناباروری داشته اید، چند سال است؟"
        },
        "inputType": "number"
       },
       {
        "type": "boolean",
        "name": "fHistory",
        "title": {
         "fa": "سابقه بارداری قبلی"
        },
        "labelTrue": {
         "fa": "دارم"
        },
        "labelFalse": {
         "fa": "ندارم"
        }
       },
       {
        "type": "comment",
        "name": "abbortion",
        "title": {
         "fa": "سابقه ی سقط داشته اید؟ توضیح دهید"
        }
       }
      ]
     }
    ],
    "widthMode": "responsive"
   }

   export default surveyJson;