var ShowSongPageTranslationListItem = function(props) {
  return (
      <div>
        <p className="">{ props.translation.attributes['foreign-meaning'] }</p>
        <p className="">{ props.translation.attributes['native-meaning'] }</p>
      </div>
  );
};
