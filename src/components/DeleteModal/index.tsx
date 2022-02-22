import React, { useState } from "react";
import ClayButton from "@clayui/button";
import ClayModal, { useModal } from "@clayui/modal";
import ClayIcon from "@clayui/icon";
import { useRepositories } from "../../contexts/repositories";

export const DeleteModal: React.FC<repositoryDeleteModal> = ({ id, name }) => {
  const { deleteRepository } = useRepositories();
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });
  return (
    <div>
      {visible && (
        <ClayModal
          center
          observer={observer}
          size="sm"
          status="warning"
          disableAutoClose={true}
        >
          <ClayModal.Header>Delete Repository</ClayModal.Header>
          <ClayModal.Body>
            <p>
              Are you sure to delete the <strong>{name}</strong> repository?
            </p>
          </ClayModal.Body>

          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton
                  displayType="secondary"
                  onClick={() => setVisible(false)}
                >
                  Cancel
                </ClayButton>
                <ClayButton
                  displayType="warning"
                  onClick={() => {
                    deleteRepository(id);
                    onClose();
                  }}
                >
                  Delete
                </ClayButton>
              </ClayButton.Group>
            }
          />
        </ClayModal>
      )}
      <button
        className="btn-unstyled mr-2 nav-btn nav-btn-monospaced"
        type="button"
        onClick={() => setVisible(true)}
      >
        <ClayIcon symbol="trash" />
      </button>
    </div>
  );
};
