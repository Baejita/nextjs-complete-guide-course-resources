import { getMeal } from "@/app/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  //ตรงนีคือการจัดระเบียบข้อความ โดยหาตัวที่เว้นวรรคแ้ล้วแยกบรรคัด
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main
        className={classes.instructions}
        dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}
      ></main>
    </>
  );
}

export default MealDetailsPage;
