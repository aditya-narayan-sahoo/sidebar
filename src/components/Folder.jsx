import { useState } from "react";

const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleAddFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return explorer.isFolder ? (
    <div style={{ marginTop: 5 }}>
      <div className="folder" onClick={() => setExpand(!expand)}>
        <span>📁{explorer.name}</span>
        <div>
          <button onClick={(e) => handleAddFolder(e, true)}>Folder +</button>
          <button onClick={(e) => handleAddFolder(e, false)}>File +</button>
        </div>
      </div>
      {expand && (
        <div style={{ paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder
              explorer={exp}
              key={exp.id}
              handleInsertNode={handleInsertNode}
            />
          ))}
        </div>
      )}
    </div>
  ) : (
    <span className="file">📄{explorer.name}</span>
  );
};

export default Folder;
