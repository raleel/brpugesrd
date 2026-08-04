# דרישות קדם

1. הבנה בסיסית של [שפת המארקדאון (markdown)](https://www.markdownguide.org/basic-syntax/).

2. תצטרך ליצור חשבון [GitHub](https://github.com/) חינמי אם אין לך אחד כזה. מומלץ להשתמש בשם של ה-RPG שלך, כיוון שזה יהיה חלק מהכתובת (URL) שבה אנשים ישתמשו כדי לגשת ל-SRD שלך.

3. ניתן לבצע את כל התהליך הזה דרך הדפדפן מבלי להכיר את git. עם זאת, לימוד של GitHub Desktop יאפשר לך לבדוק שינויים באופן מקומי לפני פרסומם לאוויר העולם.

> אם יש לך שם דומיין רשום, ניתן להשתמש בו בתהליך הזה כדי ליצור SRD כפי שאני עשיתי: https://srd.7thextinctionrpg.com

# התהליך

## יצירת המאגר (Repository) ב-Github

1. התחבר ל-GitHub.

2. נווט לתבנית הציבורית: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. לחץ על "Use this template" (השתמש בתבנית זו).

![Step3](/_media/Step3.png)

4. בחר ב-"Create a new repository" (צור מאגר חדש).

5. הזן שם למאגר.

![Step5](/_media/Step5.png)

6. בחר באפשרות 'Private' (פרטי).

7. לחץ על 'Create repository' (צור מאגר).

ייקח בין 5 ל-30 שניות להעתיק את התבנית, ולאחר מכן יהיה ברשותך עותק משלך.

8. ודא שקיים אצלך הקובץ ".nojekyll" - זהו קובץ ריק הנחוץ בעת אירוח אתר אינטרנט ב-GitHub, אחרת ה-SRD לא יוצג כראוי. *(הקובץ מורה ל-GitHub Pages לא להריץ את הקבצים המפורסמים דרך Jekyll).*

## הוספת התוכן שלך

### קבצי ‎*.md

קבצי ‎.md הם קבצי Markdown. מדובר בשפת תגיות קלה שניתן להשתמש בה כדי להוסיף אלמנטים עיצוביים למסמכי טקסט פשוטים. בהתאם להיקף התוכן שלך, תוכל להציב את כל המידע על המשחק שלך בקובץ ‎*.md יחיד, או ליצור קבצים נפרדים עבור כל פרק, כפי שאני עשיתי ב-[7thextinctionrpg.com](https://srd.7thextinctionrpg.com). ה-"sample.md" מספק כמה דוגמאות לעיצוב.

שפת Markdown קלה מאוד ללמידה; השתמש בקישור שסופק בנקודה 2 תחת "דרישות קדם" לעיל עבור רשימה מלאה של התחביר.

### ‎_Sidebar.md

זהו התפריט שלך, חלונית הניווט בצד שמאל של האתר. ברגע שהוספת קובץ Markdown למאגר שלך, עליך להוסיף אותו כאן כדי שהתוכן שלו ייכלל. פעל לפי העיצוב הקיים.

## הפעלת Github Pages כדי להפוך את המאגר לאתר אינטרנט

1. במאגר שלך, לחץ על 'Settings' (הגדרות).

![Website-Step1](/_media/Website-Step1.png)

2. בחר ב-'Pages' בתפריט הצדדי השמאלי.

![Website-Step2](/_media/Website-Step2.png)

3. אם עדיין לא הפכת את המאגר ל-'public' (ציבורי), יש לך שתי אפשרויות:
    א. להפוך את המאגר לציבורי, מה שיאפשר לך להשתמש ב-Github Pages כדי לארח את אתר ה-SRD שלך בחינם.
    ב. לשדרג את חשבון ה-GitHub שלך (בזמן כתיבת שורות אלו, העלות היא 4$ לחודש או תשלום שנתי של 48$).

4. תחת 'Branch', בחר ב-'main' ולחץ על שמירה (Save).

5. המתן 10-20 שניות ואז רענן את הדף.

6. כעת תראה את הכתובת (URL) שלך, למשל: https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## שינוי גופנים

1. ערוך את הקובץ /_assets/style.css.

2. תחת סעיף ה-'body', תמצא את siteFont ו-headingFont.

3. שנה אותם לגופנים שברצונך להשתמש בהם.

## שימוש ב-Fontawesome ו/או בתוסף Material Icons להצגת אייקונים בחינם ב-SRD שלך

### Fontawesome

השתמש ב-Fontawesome כדי לקבל אייקונים בחינם ואייקונים מונפשים. משתמשים רשומים יכולים להשתמש ב-Pro Icons.

1. מצא את האייקון ב-[Fontawesome](https://fontawesome.com/icons).
2. בחר את האייקון.
3. בחלון הקופץ, תחת לשונית ה-HTML, העתק את כל מה שבין " ".

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. מקם את הטקסט שהועתק בין `:` ללא רווחים.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

השתמש ב-Material Icons עבור אייקונים חינמיים נוספים.

1. מצא את האייקונים ב-[Material Icons](https://fonts.google.com/icons).
2. העתק והכנס את קישור ה-span ישירות לתוך קבצי ה-Markdown שלך.

```markup
<span class="material-icons">face</span>
```