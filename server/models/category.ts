import { Schema, model, models, Model, Types } from 'mongoose';
import { ICategory } from '@/types/schema';

/**
 * 全部分类
 */
export const allCategoryItem = {
    _id: '',
    cateName: '全部分类',
    alias: '',
    img:
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBzdHlsZT0id2lkdGg6MzA4cHg7aGVpZ2h0OjMwOHB4OyIgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5b2iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VhODAxMCIgZD0iTTMwMS45MTk4NDIgMTE1LjMxNzM5OSAxMjIuMjg1NjAyIDExNS4zMTczOTlsMCAxNzkuNjM0MjRjMCAwIDAgMTc5LjYzNDI0IDE3OS42MzQyNCAxNzkuNjM0MjRsMTc5LjYzNDI0IDBMNDgxLjU1NDA4MiAyOTQuOTUxNjM5QzQ4MS41NTQwODIgMTE1LjMxNzM5OSAzMDEuOTE5ODQyIDExNS4zMTczOTkgMzAxLjkxOTg0MiAxMTUuMzE3Mzk5TDMwMS45MTk4NDIgMTE1LjMxNzM5OXpNNDIxLjY3NDI5NyA0MTQuNzA2MDkzIiAvPgo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8xIiBmaWxsPSIjZWE4MDEwIiBkPSJNNzIxLjA2ODEwOCAxMTUuMzE3Mzk5YzAgMC0xNzkuNjM0MjQgMC0xNzkuNjM0MjQgMTc5LjYzNDI0bDAgMTc5LjYzNDI0IDE3OS42MzQyNCAwYzE3OS42MzQyNCAwIDE3OS42MzQyNC0xNzkuNjM0MjQgMTc5LjYzNDI0LTE3OS42MzQyNEw5MDAuNzAyMzQ4IDExNS4zMTczOTkgNzIxLjA2ODEwOCAxMTUuMzE3Mzk5IDcyMS4wNjgxMDggMTE1LjMxNzM5OXpNODQwLjgyMjU2MiAyOTQuOTUxNjM5IiAvPgo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8yIiBmaWxsPSIjZWE4MDEwIiBkPSJNNzIxLjA2ODEwOCA1MzQuNDY0NjQxIDU0MS40MzM4NjggNTM0LjQ2NDY0MWwwIDE3OS42MzQyNGMwIDE3OS42MzQyNCAxNzkuNjM0MjQgMTc5LjYzNDI0IDE3OS42MzQyNCAxNzkuNjM0MjRsMTc5LjYzNDI0IDBMOTAwLjcwMjM0OCA3MTQuMDk4ODgxQzkwMC43MDEzMjUgNzE0LjA5ODg4MSA5MDAuNzAxMzI1IDUzNC40NjQ2NDEgNzIxLjA2ODEwOCA1MzQuNDY0NjQxTDcyMS4wNjgxMDggNTM0LjQ2NDY0MXoiIC8+CjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzMiIGZpbGw9IiNlYTgwMTAiIGQ9Ik0xMjIuMjg1NjAyIDcxNC4wOTg4ODFsMCAxNzkuNjM0MjRMMzAxLjkxOTg0MiA4OTMuNzMzMTIxYzAgMCAxNzkuNjM0MjQgMCAxNzkuNjM0MjQtMTc5LjYzNDI0TDQ4MS41NTQwODIgNTM0LjQ2NDY0MSAzMDEuOTE5ODQyIDUzNC40NjQ2NDFDMTIyLjI4NTYwMiA1MzQuNDY0NjQxIDEyMi4yODU2MDIgNzE0LjA5ODg4MSAxMjIuMjg1NjAyIDcxNC4wOTg4ODFMMTIyLjI4NTYwMiA3MTQuMDk4ODgxek00MjEuNjc0Mjk3IDcxNC4wOTg4ODEiIC8+Cgo8L3N2Zz4K',
    sequence: -1
};

/**
 * 未分类
 */
export const otherCategoryItem = {
    _id: new Types.ObjectId('5dc52b0aba304f6314a9229f'),
    cateName: '未分类',
    alias: 'others',
    img:
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBzdHlsZT0id2lkdGg6MzA4cHg7aGVpZ2h0OjMwOHB4OyIgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5b2iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VhODAxMCIgZD0iTTMwMS45MTk4NDIgMTE1LjMxNzM5OSAxMjIuMjg1NjAyIDExNS4zMTczOTlsMCAxNzkuNjM0MjRjMCAwIDAgMTc5LjYzNDI0IDE3OS42MzQyNCAxNzkuNjM0MjRsMTc5LjYzNDI0IDBMNDgxLjU1NDA4MiAyOTQuOTUxNjM5QzQ4MS41NTQwODIgMTE1LjMxNzM5OSAzMDEuOTE5ODQyIDExNS4zMTczOTkgMzAxLjkxOTg0MiAxMTUuMzE3Mzk5TDMwMS45MTk4NDIgMTE1LjMxNzM5OXpNNDIxLjY3NDI5NyA0MTQuNzA2MDkzIDMwMS45MTk4NDIgNDE0LjcwNjA5M2MtMTA5LjM3ODEzIDAtMTE5LjMxOTU0OS05Mi4wMDk1NTQtMTE5Ljc1NDQ1NC0xMTkuNzU1NDc4TDE4Mi4xNjUzODggMTc1LjE5NjE2MSAzMDEuOTE5ODQyIDE3NS4xOTYxNjFjMTkuOTk4NDczIDAgMTE5Ljc1NDQ1NCA1Ljc4NzgyIDExOS43NTQ0NTQgMTE5Ljc1NDQ1NEw0MjEuNjc0Mjk3IDQxNC43MDYwOTMgNDIxLjY3NDI5NyA0MTQuNzA2MDkzek00MjEuNjc0Mjk3IDQxNC43MDYwOTMiIC8+CjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzEiIGZpbGw9IiNlYTgwMTAiIGQ9Ik03MjEuMDY4MTA4IDExNS4zMTczOTljMCAwLTE3OS42MzQyNCAwLTE3OS42MzQyNCAxNzkuNjM0MjRsMCAxNzkuNjM0MjQgMTc5LjYzNDI0IDBjMTc5LjYzNDI0IDAgMTc5LjYzNDI0LTE3OS42MzQyNCAxNzkuNjM0MjQtMTc5LjYzNDI0TDkwMC43MDIzNDggMTE1LjMxNzM5OSA3MjEuMDY4MTA4IDExNS4zMTczOTkgNzIxLjA2ODEwOCAxMTUuMzE3Mzk5ek04NDAuODIyNTYyIDI5NC45NTE2MzljMCAxOS45OTg0NzMtNS43ODc4MiAxMTkuNzU1NDc4LTExOS43NTQ0NTQgMTE5Ljc1NTQ3OEw2MDEuMzA4NTM3IDQxNC43MDcxMTcgNjAxLjMwODUzNyAyOTQuOTUxNjM5YzAtMTA5LjM3NzEwNiA5Mi4wMDk1NTQtMTE5LjMxODUyNiAxMTkuNzU4NTQ4LTExOS43NTQ0NTRsMTE5Ljc1NDQ1NCAwTDg0MC44MjE1MzkgMjk0Ljk1MTYzOSA4NDAuODIyNTYyIDI5NC45NTE2Mzl6TTg0MC44MjI1NjIgMjk0Ljk1MTYzOSIgLz4KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMiIgZmlsbD0iI2VhODAxMCIgZD0iTTcyMS4wNjgxMDggNTM0LjQ2NDY0MSA1NDEuNDMzODY4IDUzNC40NjQ2NDFsMCAxNzkuNjM0MjRjMCAxNzkuNjM0MjQgMTc5LjYzNDI0IDE3OS42MzQyNCAxNzkuNjM0MjQgMTc5LjYzNDI0bDE3OS42MzQyNCAwTDkwMC43MDIzNDggNzE0LjA5ODg4MUM5MDAuNzAxMzI1IDcxNC4wOTg4ODEgOTAwLjcwMTMyNSA1MzQuNDY0NjQxIDcyMS4wNjgxMDggNTM0LjQ2NDY0MUw3MjEuMDY4MTA4IDUzNC40NjQ2NDF6TTg0MC44MjI1NjIgODMzLjg1NDM1OSA3MjEuMDY4MTA4IDgzMy44NTQzNTljLTE5Ljk5ODQ3MyAwLTExOS43NTg1NDgtNS43ODc4Mi0xMTkuNzU4NTQ4LTExOS43NTQ0NTRMNjAxLjMwOTU2IDU5NC4zNDAzMzNsMTE5Ljc1ODU0OCAwYzEwOS4zNzQwMzYgMCAxMTkuMzE1NDU2IDkyLjAwOTU1NCAxMTkuNzU0NDU0IDExOS43NTg1NDhMODQwLjgyMjU2MiA4MzMuODU0MzU5IDg0MC44MjI1NjIgODMzLjg1NDM1OXpNODQwLjgyMjU2MiA4MzMuODU0MzU5IiAvPgo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWE4MDEwIiBkPSJNMTIyLjI4NTYwMiA3MTQuMDk4ODgxbDAgMTc5LjYzNDI0TDMwMS45MTk4NDIgODkzLjczMzEyMWMwIDAgMTc5LjYzNDI0IDAgMTc5LjYzNDI0LTE3OS42MzQyNEw0ODEuNTU0MDgyIDUzNC40NjQ2NDEgMzAxLjkxOTg0MiA1MzQuNDY0NjQxQzEyMi4yODU2MDIgNTM0LjQ2NDY0MSAxMjIuMjg1NjAyIDcxNC4wOTg4ODEgMTIyLjI4NTYwMiA3MTQuMDk4ODgxTDEyMi4yODU2MDIgNzE0LjA5ODg4MXpNNDIxLjY3NDI5NyA3MTQuMDk4ODgxYzAgMTA5LjM3NDAzNi05Mi4wMTA1NzcgMTE5LjMxNTQ1Ni0xMTkuNzU0NDU0IDExOS43NTQ0NTRMMTgyLjE2NTM4OCA4MzMuODUzMzM1IDE4Mi4xNjUzODggNzE0LjA5ODg4MWMwLTE5Ljk5ODQ3MyA1Ljc4NzgyLTExOS43NTg1NDggMTE5Ljc1NDQ1NC0xMTkuNzU4NTQ4bDExOS43NTQ0NTQgMEw0MjEuNjc0Mjk3IDcxNC4wOTg4ODEgNDIxLjY3NDI5NyA3MTQuMDk4ODgxek00MjEuNjc0Mjk3IDcxNC4wOTg4ODEiIC8+Cgo8L3N2Zz4K',
    sequence: 10001
};

export class Category {
    private _model: Model<ICategory>;

    constructor() {
        const schema = new Schema<ICategory>(
            {
                // 分类名称
                cateName: { type: String },

                // 分类别名
                alias: { type: String },

                // 图标地址
                img: { type: String },

                // 排序
                sequence: { type: Number },

                // 创建时间
                createTime: { type: Date, default: new Date() },

                // 修改时间
                modifyTime: { type: Date, default: new Date() }
            },
            {
                // 设置查询时默认返回虚拟字段
                toJSON: { virtuals: true },
                toObject: { virtuals: true }
            }
        );

        // 初始化未分类
        schema.statics.initData = () => {
            this.model.exists({}).then(exist => {
                if (!exist) {
                    this.model.create(otherCategoryItem);
                }
            });
        };

        if (models.category) {
            this._model = models.category;
        } else {
            this._model = model<ICategory>('category', schema, 'category');
        }
    }

    public get model(): Model<ICategory> {
        return this._model;
    }
}
