import React, { useContext, useEffect, useState } from 'react';
import {
  useHistory, useLocation, useParams, Link,
} from 'react-router-dom';
import NoSleep from 'nosleep.js';
import { toast } from 'react-toastify';

import Nav, { NavButton } from '../../components/Nav';
import Icon from '../../components/Icon';
import ToastUndo from '../../components/ToastUndo';
import RecipeImage from './components/Image';
import Description from './components/Description';
import MainContext from '../../services/context';
import ListDb from '../../services/list';
import calcServings from '../../utils/calcServings';
import './Recipe.scss';

const noSleep = new NoSleep();

export default () => {
  const location = useLocation();
  const { id } = useParams();
  const history = useHistory();
  const { recipes, user } = useContext(MainContext);

  const [hasList, setHasList] = useState(false);
  const listDb = new ListDb(user.listCode);

  const addItem = async (item) => {
    const { list } = await listDb.addItems(item);
    const removed = list.find((it) => it.name === item);
    const undo = () => {
      if (removed) {
        listDb.removeItems(removed.id);
      }
    };
    toast.dismiss();
    toast(<ToastUndo undo={undo} label={`${item} hinzugefügt.`} />, {
      closeOnClick: false,
    });
  };

  const recipe = recipes.find(({ _id }) => _id === id);

  useEffect(() => {
    document.title = recipe.title;
    window.scrollTo(0, 0);
    window.sessionStorage.setItem('lastViewedRecipe', id);
    const checkList = async () => {
      const list = await listDb.getLocalList();
      setHasList(Boolean(list));
    };
    checkList();
  }, []);

  const passedServings = +(new URLSearchParams(location.search)).get('servings');
  const [servings, setServings] = useState(passedServings || recipe.servings);
  const [keepAwake, setAwake] = useState(false);

  const ingrToStr = ({ name, hint }) => `${calcServings(name, recipe.servings, servings)}${hint ? ` (${hint})` : ''}`;

  const ingredientsBySection = recipe.sections?.length
    ? recipe.sections.map((section) => ({
      ...section,
      ingredients: recipe.ingredients.filter((ingr) => ingr.s === section._id),
    }))
    : [{
      ingredients: recipe.ingredients,
    }];

  const back = () => {
    const { state } = history.location;
    if (state && state.fromHome) {
      history.go(-1);
    } else {
      history.push('/');
    }
  };

  const content = recipe ? (
    <>
      {user.planCode ? (
        <div id="top-bar-container">
          <div id="top-bar">
            <button type="button" id="back" onClick={back}>
              <Icon name="arrowLeft" />
              Alle Rezepte
            </button>
            <Link id="add-to-plan" to={`/plan/new?recipe=${recipe._id}&servings=${servings}`}>
              <span>+</span>
              Zum Wochenplan
            </Link>
          </div>
        </div>
      ) : null}
      <div className="recipe-container">
        <div className="recipe">
          <h1 className="recipe-title">{recipe.title}</h1>

          {recipe.image ? <RecipeImage recipe={recipe} /> : null}

          <div className="recipe-info">
            <div className="duration">
              {`${recipe.duration} Minuten`}
            </div>
            <div className="categories">
              {recipe.categories.map((ctg) => (
                <Link key={ctg} to={{ pathname: '/', state: { query: ctg } }}>{ctg}</Link>
              ))}
            </div>
          </div>

          <div className="recipe-main">
            <div>
              <h2 className="servings-header">
                <span>Zutaten</span>
                <div className="servings-control">
                  {servings > 1 ? (
                    <button type="button" className="down" onClick={() => setServings(servings - 1)}>-</button>
                  ) : null}
                  <span id="servings">{servings}</span>
                  <button type="button" className="up" onClick={() => setServings(servings + 1)}>+</button>
                </div>
              </h2>

              <>
                {ingredientsBySection.map((section) => (
                  <div key={section._id || 'none'}>
                    {section._id ? (
                      <h3>{section.name}</h3>
                    ) : null}
                    <ul>
                      {section.ingredients.map((ingr) => (
                        <li key={ingr.name}>
                          <div className="content">
                            <span className="name">{calcServings(ingr.name, recipe.servings, servings)}</span>
                            <span className="hint">{ingr.hint ? ` (${ingr.hint})` : ''}</span>
                          </div>
                          {hasList ? (
                            <button className="cart" type="button" onClick={() => addItem(ingrToStr(ingr))}>
                              <Icon name="addCart" />
                            </button>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            </div>

            <Description recipe={recipe} servings={servings} />
          </div>

          <div id="buttons">
            {user.authenticated && window.navigator.onLine ? (
              <Link to={`/recipe/${id}/edit`} className="button">Bearbeiten</Link>
            ) : null}
            <a href={`/pdf/recipe/${id}`} className="button" download>PDF</a>
          </div>
        </div>
      </div>
    </>
  ) : <div>Rezept konnte nicht gefunden werden :(</div>;

  return (
    <>
      <Nav
        page="recipes"
        menuButton={(
          <button type="button" className="menu-button" onClick={back}>
            <Icon name="arrowLeft" color="#333" />
          </button>
        )}
      >
        {navigator.share ? (
          <NavButton
            icon="share"
            onClick={() => {
              navigator.share({
                url: window.location.href,
                title: recipe.title,
              });
            }}
          />
        ) : null}
        <NavButton
          icon="keepAwake"
          onClick={() => {
            const action = keepAwake ? 'disable' : 'enable';
            noSleep[action]();
            toast.info(!keepAwake
              ? 'Kochmodus aktiviert - Display schaltet sich nicht automatisch aus'
              : 'Kochmodus deaktiviert - Display kann sich wieder automatisch ausschalten');
            setAwake(!keepAwake);
          }}
          hasActiveState
        />
      </Nav>
      {content}
    </>
  );
};
