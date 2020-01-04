## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|Email|string|null: false|

### Association
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|foreign_key: true|
|group|reference|foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|foreign_key: true|
|group|reference|foreign_key: true|
|content|string|null:true|
|image|image|null:true|

### Association
- belongs_to :user
- belongs_to :group







<!---
メンターよりいただいたテーブル名、カラム名と教わった内容

users
id,name,email

groups
id,name

group_users
id,user_id,group_id

messages
id,content,image,user_id,group_id

belongs_toの後ろは単数

foreign_key:falseはほぼ無い

null:trueは生成した時にnullで良いものにそうする。nullの初期状態を許すからnull:tureでは無い

user_idはuserテーブルにあるidのことなので新しくuser_idは作らなくて良い（自動生成）
（→テーブルには全ての共通のidは無いと解釈できる（自分用）)


2回目に教わった内容
中間テーブルを経由するには下記の一行が必要となる
has_many :    ,throuh:

-->