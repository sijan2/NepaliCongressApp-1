import React, {FC} from 'react';
import ListNews from '@components/ListNews/ListNews';
import {FlatList} from 'react-native';
import {useSaved} from '@components/ContextStore/SavedProvider/SavedProvider';
import {dateFormatter} from '@utils/DayGen';
import {BASE_URL} from '@constants/NewsConstant/NewsConstants';

interface list {
  searchPhrase?: any;
}

const SearchList: FC<list> = React.memo(function SearchList({searchPhrase}) {
  const {search, saved, carouselData} = useSaved();
  const ItemView = ({item}: any) => {
    const formattedDate = dateFormatter(item.published_date);
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
          image={BASE_URL + item.image}
          title={item.title}
          name={item.name}
          date={item.published_date}
          description={item.description}
          sourceLink={item.source_link}
        />
      );
    }
    // if search value is not empty then show news that match name with search value
    if (item.description.toUpperCase().includes(searchPhrase.toUpperCase())) {
      return (
        <ListNews
          id={item.id}
          image={BASE_URL + item.image}
          title={item.title}
          name={item.name}
          date={item.published_date}
          description={item.description}
          sourceLink={item.source_link}
        />
      );
    }
    // if search value is not empty then show news that match title with search value
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase())) {
      return (
        <ListNews
          id={item.id}
          image={BASE_URL + item.image}
          title={item.title}
          name={item.name}
          date={item.published_date}
          description={item.description}
          sourceLink={item.source_link}
        />
      );
    }
    if (formatted.toUpperCase().includes(searchPhrase.toUpperCase())) {
      console.log('Search Phrase =>', searchPhrase);
      console.log('Formatted UpperCase =>', formatted.toUpperCase());
      return (
        <ListNews
          id={item.id}
          image={BASE_URL + item.image}
          title={item.title}
          name={item.name}
          date={item.published_date}
          description={item.description}
          sourceLink={item.source_link}
        />
      );
    }
    // if search value doesn't match then return null
    return null;
  };

  return (
    <FlatList
      data={search || saved || carouselData} // passing saved data instead of actual api news data
      keyExtractor={(show, index) => 'key' + index}
      renderItem={ItemView}
    />
  );
});

export default SearchList;
