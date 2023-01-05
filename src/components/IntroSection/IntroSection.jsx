import React from "react";
import NarrowWrapper from "../NarrowWrapper/NarrowWrapper";
import cl from "./IntroSection.module.css"

export default function IntroSection() {
  return (
    <section className={cl.intro}>
      <NarrowWrapper>
        <h1 className={cl.intro__title}>Discover Amazing places in Japan</h1>
        <p className={cl.intro__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit et,
          consectetur, aliquid modi dolorem dolorum enim error nam! Aperiam,
          ipsum. Assumenda fugit sed debitis reprehenderit culpa repellendus,
          magnam blanditiis fugiat.
        </p>
        <form className={cl.searchForm}>
          <fieldset className={cl.searchForm__wrap}>
            <p className={cl.searchForm__info}>
              <input
                name="user-like-to-do"
                type="text"
                className={cl.searchForm__field}
                placeholder="What would you like to do?"
              ></input>
              <input
                name="user-like-to-go"
                type="text"
                className={cl.searchForm__field}
                placeholder="Where would you like to go?"
              ></input>
              <button className={cl.searchForm__submit} type="submit">
                search
              </button>
            </p>
          </fieldset>
        </form>
      </NarrowWrapper>
    </section>
  );
}
