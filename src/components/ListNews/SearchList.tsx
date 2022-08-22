import React, {FC} from 'react';
import ListNews from '@components/ListNews/ListNews';
import {FlatList} from 'react-native';
import {useSaved} from '@components/ContextStore/SavedProvider/SavedProvider';
import {dateFormatter} from '@utils/DayGen';

interface list {
  searchPhrase?: any;
  news?: any;
}

const SearchList: FC<list> = React.memo(function SearchList({searchPhrase}) {
  const {saved} = useSaved();
  const ItemView = ({item}: any) => {
    const formattedDate = dateFormatter(route.params.date);
    const newDate = formattedDate.date;
    const newMonth = formattedDate.month;
    const newYear = formattedDate.year;
    const formatted = `${newMonth} ${newDate}, ${newYear}`;
    // Flat List Item
    // if search value is empty then show all news
    if (searchPhrase === '') {
      return (
        <ListNews
          id={item.id}
          image={item.image}
          title={item.title}
          name={item.name}
          date={item.date}
          description={item.description}
          sourceLink={item.sourceLink}
        />
      );
    }
    // if search value is not empty then show news that match name with search value
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase())) {
      return (
        <ListNews
          id={item.id}
          image={item.image}
          title={item.title}
          name={item.name}
          date={item.date}
          description={item.description}
          sourceLink={item.sourceLink}
        />
      );
    }
    // if search value is not empty then show news that match title with search value
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase())) {
      return (
        <ListNews
          id={item.id}
          image={item.image}
          title={item.title}
          name={item.name}
          date={item.date}
          description={item.description}
          sourceLink={item.sourceLink}
        />
      );
    }
    if (formatted.toUpperCase().includes(searchPhrase.toUpperCase())) {
      return (
        <ListNews
          id={item.id}
          image={item.image}
          title={item.title}
          name={item.name}
          date={item.date}
          description={item.description}
          sourceLink={item.sourceLink}
        />
      );
    }
    // if search value doesn't match then return null
    return null;
  };

  return (
    <FlatList
      data={saved} // passing saved data instead of actual api news data
      keyExtractor={(show, index) => 'key' + index}
      renderItem={ItemView}
    />
  );
});

export default SearchList;
