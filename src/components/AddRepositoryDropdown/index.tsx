import { FormEvent, useState, useLayoutEffect, useRef } from "react";
import ClayIcon from "@clayui/icon";
import ClayAlert from "@clayui/alert";
import ClayDropDown from "@clayui/drop-down";
import { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";
import { useRepositories } from "../../contexts/repositories";
import "./AddRepositoryDropdown.scss";

export default function AddRepositoryDropdown() {
  const [expandAddRepository, setExpandAddRepository] = useState(false);
  const {
    addRepository,
    addAllUserRepositories,
    urlEnding,
    setUrlEnding,
    apiFeedback,
  } = useRepositories();
  const inputElement = useRef<HTMLInputElement>({} as HTMLInputElement);

  useLayoutEffect(() => {
    inputElement.current.focus();
  }, [expandAddRepository]);

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (urlEnding.split("/").length > 1) {
      addRepository();
      return true;
    }

    addAllUserRepositories();
    return true;
  };

  return (
    <ClayDropDown
      active={expandAddRepository}
      onActiveChange={setExpandAddRepository}
      trigger={
        <button
          className="btn btn-unstyled nav-btn nav-btn-monospaced unstyled-button plus-icon-button"
          type="button"
        >
          <ClayIcon symbol="plus" />
        </button>
      }
      menuElementAttrs={{
        className: "add-repository-dropdown",
        containerProps: {
          className: "dropdown-menu-react-portal-div",
          id: "dropdownMenuReactPortalDiv",
        },
      }}
      menuWidth={"sm"}
    >
      <form onSubmit={onSubmitForm}>
        <ClayCard>
          <ClayCard.Body>
            <ClayCard.Description displayType="title">
              New Repository
            </ClayCard.Description>
            <label htmlFor="repository">
              Repository <span>*</span>
            </label>
            <ClayInput.Group>
              <ClayInput
                className={
                  apiFeedback !== undefined ? "add-repository-input" : ""
                }
                value={urlEnding}
                type="text"
                onChange={(e) => setUrlEnding(e.target.value)}
                ref={inputElement}
              />
            </ClayInput.Group>
            {apiFeedback !== undefined && (
              <div className="c-mt-3">
                <ClayAlert
                  displayType="danger"
                  title={apiFeedback.toString()}
                  variant="feedback"
                />
              </div>
            )}
          </ClayCard.Body>
        </ClayCard>
        <div className="dropdown-action-buttons">
          <ClayButton
            displayType="secondary"
            onClick={() => setExpandAddRepository(false)}
          >
            Cancel
          </ClayButton>
          {urlEnding === "" ? (
            <ClayButton displayType="primary" disabled>
              Add
            </ClayButton>
          ) : (
            <ClayButton displayType="primary" type="submit">
              Add
            </ClayButton>
          )}
        </div>
      </form>
    </ClayDropDown>
  );
}
