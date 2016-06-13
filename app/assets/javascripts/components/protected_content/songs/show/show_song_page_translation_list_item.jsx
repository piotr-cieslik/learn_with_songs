var ShowSongPageTranslationListItem = function(props) {
  var additionalClassName = props.showNativeMeaning ? "" : " hidden";

  return (
      <li className="collection-item">
        <button
          className="btn-floating waves-effect waves-light red right"
          onClick={ props.onDelete }>
          <i className="material-icons">remove</i>
        </button>
        <p className="translation-foreign-meaning">
          { props.translation.attributes['foreign-meaning'] }
        </p>
        <p className={"translation-native-meaning" + additionalClassName}>
          { props.translation.attributes['native-meaning'] }
        </p>
      </li>
  );
};
