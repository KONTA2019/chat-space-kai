## users_infomationsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|Email|string|null: false|
|Email|string|null: false|

### Association
- has_many :foreign_keys


## foreign_keysテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: true|
|user_name_id|integer|null: true, foreign_key: true|
|group_name_id|integer|null: true, foreign_key: true|
|comment_id|integer|null: true, foreign_key: true|

### Association
- belongs_to :users_imformations
- has_many :users_names
- has_many :groups_names
- has_many :comments


## users_namesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_name_id|integer|null: false, foreign_key: true|
|user_name|string|null: false|

### Association
- belongs_to :users-informations
- belongs_to :foreign-keys


## groups_namesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|gorup_name_id|integer|null: true, foreign_key: true|
|group_name|string|null: true|

### Association
- belongs_to :users-informations
- belongs_to :foreign-keys


## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comment_id|integer|null: true, foreign_key: true|
|comment|text|null: true|
|date|text|null: true|

### Association
- belongs_to :users-informations
- belongs_to :foreign-keys