import React, { useState } from 'react';
import { Space, Tag } from 'antd';

const { CheckableTag } = Tag;

type tag_T = {
  value: number | string,
  name: string
}

const Tags = (props: {setTags: any, name: string, tagsData: Array<tag_T>}) => {
  const [selectedTags, setSelectedTags] = useState<Array<string | number>>([]);

  const handleChange = (tag: string | number, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    props.setTags(nextSelectedTags)
  };

  return (
    <>
      <span style={{ marginRight: 8 }}>{props.name}:</span>
      <Space size={[0, 8]} wrap>
        {props.tagsData.map((tag) => (
          <CheckableTag
            key={tag.value}
            checked={selectedTags.includes(tag.value)}
            onChange={(checked) => handleChange(tag.value, checked)}
          >
            {tag.name}
          </CheckableTag>
        ))}
      </Space>
    </>
  );
};

export default Tags;