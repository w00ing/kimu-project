import { OAS3Definition } from "swagger-jsdoc";
import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";

const swaggerDocs: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    version: "1.0.0",
    title: "KIMU STUDIO",
    description: "A Swagger API docs for Kimu Studio",
  },
  servers: [
    { url: "https://api.kimustudio.ga/v1", description: "EC2 Server" },
    { url: "http://localhost:3005/v1", description: "Local Server" },
    // { url: "http://52.78.212.95:3005/kimu/api/v1", description: "EC2 Server" },
  ],

  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Awesome Product",
          },
          price: {
            type: "integer",
            example: 10000,
          },
          productImages: {
            type: "array",
            items: { type: "string" },
            example: [
              "https://picsum.photos/300/300?random=143",
              "https://picsum.photos/300/300?random=434",
              "https://picsum.photos/300/300?random=626",
            ],
          },
          isDiscounted: {
            type: "boolean",
            example: true,
          },
          discountAmount: {
            type: "integer",
            example: 2000,
          },
        },
      },
      ProductWithTopics: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Awesome Product",
          },
          price: {
            type: "integer",
            example: 10000,
          },
          productImages: {
            type: "array",
            items: { type: "string" },
            example: [
              "https://picsum.photos/300/300?random=143",
              "https://picsum.photos/300/300?random=434",
              "https://picsum.photos/300/300?random=626",
            ],
          },
          isDiscounted: {
            type: "boolean",
            example: true,
          },
          discountAmount: {
            type: "integer",
            example: 2000,
          },
          topics: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                  example: 1,
                },
                name: {
                  type: "string",
                  example: "심플",
                },
              },
            },
          },
        },
      },
      ProductWithSubcategoriesAndTopics: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Awesome Product",
          },
          price: {
            type: "integer",
            example: 10000,
          },
          productImages: {
            type: "array",
            items: { type: "string" },
            example: [
              "https://picsum.photos/300/300?random=143",
              "https://picsum.photos/300/300?random=434",
              "https://picsum.photos/300/300?random=626",
            ],
          },
          isDiscounted: {
            type: "boolean",
            example: true,
          },
          discountAmount: {
            type: "integer",
            example: 2000,
          },
          subcategory: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 3,
              },
              name: {
                type: "string",
                example: "미니아트시그니처",
              },
            },
          },
          topics: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                  example: 1,
                },
                name: {
                  type: "string",
                  example: "심플",
                },
              },
            },
          },
        },
      },
      Category: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "아트워크",
          },
          subcategories: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                  example: 2,
                },
                name: {
                  type: "string",
                  example: "아트시그니처",
                },
                productCount: {
                  type: "integer",
                  example: 11,
                },
              },
            },
          },
        },
      },
      Review: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          stars: {
            type: "number",
            format: "float",
            example: 2.5,
          },
          content: {
            type: "string",
            example: "This product is awesome!",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            example: "2021-02-04T23:03:36.981Z",
          },
          approvedAt: {
            type: "string",
            format: "date",
            example: "2020-09-26",
          },
          reviewImages: {
            type: "array",
            items: { type: "string" },
            example: [
              "https://picsum.photos/300/300?random=143",
              "https://picsum.photos/300/300?random=434",
              "https://picsum.photos/300/300?random=626",
            ],
          },
          user: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 3,
              },
              name: {
                type: "string",
                example: "Uni",
              },
            },
          },
        },
      },
    },
    requestBodies: {
      LoginUser: {
        description: "Data needed to login user",
        required: true,
        content: {
          "application/json": {
            schema: {
              example: {
                email: "Harmon99@gmail.com",
                password: "2HRklTCsPM6uVeV",
              },
              type: "object",
              properties: {
                email: {
                  type: "string",
                  required: true,
                  format: "email",
                },
                password: {
                  type: "string",
                  required: true,
                },
              },
            },
          },
        },
      },
      UpdateUserInfo: {
        description: "Data needed to update user info",
        required: true,
        content: {
          "application/json": {
            schema: {
              example: {
                address: "new ",
                gender: "male",
                socialIssueNames: ["장애인", "환경", "난민"],
              },
              type: "object",
              properties: {
                address: {
                  type: "string",
                  required: false,
                },
                gender: {
                  type: "string",
                  required: false,
                },
                socialIssues: {
                  type: "array",
                  required: false,
                },
                birthdate: {
                  type: "string",
                  format: "date",
                  required: false,
                },
              },
            },
          },
        },
      },
      UpdateUserPassword: {
        description: "Data needed to update user password",
        required: true,
        content: {
          "application/json": {
            schema: {
              example: {
                password: "aaa",
              },
              type: "object",
              properties: {
                password: {
                  type: "string",
                  required: true,
                },
              },
            },
          },
        },
      },
      CreateUser: {
        description: "Data needed to create a user",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "kimwy1997@gmail.com",
                  required: true,
                },
                name: {
                  type: "string",
                  example: "Wooyeong",
                  required: true,
                },
                password: {
                  type: "string",
                  example: "1234",
                  required: true,
                },
                gender: {
                  type: "string",
                  example: "남자",
                  required: true,
                },
                phoneNumber: {
                  type: "string",
                  example: "01021227842",
                  required: true,
                },
                address: {
                  type: "string",
                  example: "758 Winfield Pike",
                  required: true,
                },
                socialIssueNames: {
                  type: "array",
                  example: ["성차별", "환경", "난민"],
                  required: true,
                },
                birthdate: {
                  type: "string",
                  format: "date",
                  example: "1997-03-06",
                  required: true,
                },
              },
            },
          },
        },
      },
    },
    parameters: {
      productId: {
        name: "productId",
        in: "path",
        required: true,
        schema: {
          type: "integer",
        },
      },
      categoryId: {
        name: "categoryId",
        in: "path",
        required: true,
        schema: {
          type: "integer",
        },
      },
      subcategoryId: {
        name: "subcategoryId",
        in: "path",
        required: true,
        schema: {
          type: "integer",
        },
      },
      orderNumber: {
        name: "orderNumber",
        in: "path",
        description: "Uuid of an Item",
        required: true,
        schema: {
          type: "string",
          format: "uuid",
          example: "034c0af1-292c-41e7-afc3-f6599f65d277",
        },
      },
      searchTerm: {
        in: "query",
        name: "searchTerm",
        required: false,
        schema: {
          type: "string",
        },
      },
      auth: {
        in: "header",
        name: "auth",
        required: true,
        description: "An Authorization header",
        type: "string",
      },
    },
    //TODO: Wrong credentials
    responses: {
      WrongCredentials: {
        description: "Wrong Credentials",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 401,
                success: false,
                message: "이메일 혹은 비밀번호가 잘못되었습니다.",
              },
            },
          },
        },
      },
      Unauthorized: {
        description: "Unauthorized",
        content: {
          "application/json": {
            schema: {
              example: {
                status: 401,
                success: false,
                message: "토큰 값이 없습니다.",
              },
              type: "object",
              properties: {
                status: {
                  type: "integer",
                  default: statusCode.UNAUTHORIZED,
                },
                success: {
                  type: "boolean",
                  default: false,
                },
                message: {
                  type: "string",
                  default: responseMessage.EMPTY_TOKEN,
                },
              },
            },
          },
        },
      },
      InternalServerError: {
        description: "Internal Server",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "integer",
                  default: statusCode.INTERNAL_SERVER_ERROR,
                },
                success: {
                  type: "boolean",
                  default: false,
                },
                message: {
                  type: "string",
                  default: responseMessage.INTERNAL_SERVER_ERROR,
                },
              },
            },
          },
        },
      },
    },
    headers: {
      AuthorizationTokenCookie: {
        "Set-Cookie": {
          schema: {
            type: "string",
            example:
              "Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJNZXJsZS5Qb3Vyb3M0MEB5YWhvby5jb20iLCJuYW1lIjoiQ2F0aHJpbmUuQm9zY283MiIsImlhdCI6MTYxMjYzMzQxOSwiZXhwIjoxNjE1MjI1NDE5LCJpc3MiOiJraW11In0.gaiISctyWnde0mxsV9MHRIN5y1-aQ-YX3RfIHVQtqc8; HttpOnly; Path=/; Max-Age=2592000",
          },
        },
      },
    },
    securitySchemes: {
      jwtAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
        name: "Authorization",
      },
    },
    // security: [{ jwtAuth: [] }],
  },
  paths: {
    "/products/best": {
      get: {
        tags: ["Products"],
        summary: "Gets Best Products",
        responses: {
          200: {
            description: "A list of best products. Returns 9 objects.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: 200,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_BEST_PRODUCTS_SUCCESS,
                    },
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Product",
                      },
                    },
                  },
                  example: {
                    status: 200,
                    success: true,
                    message: "BEST 상품 조회 성공",
                    data: [
                      {
                        id: 75,
                        name: "Sports",
                        price: 76944,
                        productImages: [
                          "https://picsum.photos/300/300?random=960",
                          "https://picsum.photos/300/300?random=567",
                          "https://picsum.photos/300/300?random=326",
                        ],
                        isDiscounted: true,
                        discountAmount: 60779,
                      },
                      {
                        id: 99,
                        name: "Awesome Frozen Shoes",
                        price: 9304,
                        productImages: [
                          "https://picsum.photos/300/300?random=266",
                          "https://picsum.photos/300/300?random=386",
                          "https://picsum.photos/300/300?random=180",
                        ],
                        isDiscounted: true,
                        discountAmount: 69326,
                      },
                      {
                        id: 39,
                        name: "Administrator",
                        price: 73916,
                        productImages: [
                          "https://picsum.photos/300/300?random=367",
                          "https://picsum.photos/300/300?random=368",
                          "https://picsum.photos/300/300?random=413",
                        ],
                        isDiscounted: true,
                        discountAmount: 89745,
                      },
                      {
                        id: 30,
                        name: "upward-trending",
                        price: 41076,
                        productImages: [
                          "https://picsum.photos/300/300?random=349",
                          "https://picsum.photos/300/300?random=33",
                          "https://picsum.photos/300/300?random=785",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                      {
                        id: 41,
                        name: "Forward",
                        price: 89530,
                        productImages: [
                          "https://picsum.photos/300/300?random=560",
                          "https://picsum.photos/300/300?random=332",
                          "https://picsum.photos/300/300?random=503",
                        ],
                        isDiscounted: true,
                        discountAmount: 75161,
                      },
                      {
                        id: 51,
                        name: "overriding",
                        price: 49278,
                        productImages: [
                          "https://picsum.photos/300/300?random=516",
                          "https://picsum.photos/300/300?random=216",
                          "https://picsum.photos/300/300?random=831",
                        ],
                        isDiscounted: true,
                        discountAmount: 92955,
                      },
                      {
                        id: 2,
                        name: "application",
                        price: 97874,
                        productImages: [
                          "https://picsum.photos/300/300?random=103",
                          "https://picsum.photos/300/300?random=670",
                          "https://picsum.photos/300/300?random=198",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                      {
                        id: 74,
                        name: "quantifying",
                        price: 60037,
                        productImages: [
                          "https://picsum.photos/300/300?random=977",
                          "https://picsum.photos/300/300?random=68",
                          "https://picsum.photos/300/300?random=180",
                        ],
                        isDiscounted: true,
                        discountAmount: 27246,
                      },
                      {
                        id: 49,
                        name: "Organic",
                        price: 41659,
                        productImages: [
                          "https://picsum.photos/300/300?random=437",
                          "https://picsum.photos/300/300?random=537",
                          "https://picsum.photos/300/300?random=358",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                    ],
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/products/search": {
      get: {
        tags: ["Products"],
        summary: "Search products by product name",
        parameters: [{ $ref: "#/components/parameters/searchTerm" }],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.SEARCH_PRODUCTS_SUCCESS,
                    },
                    data: {
                      type: "array",
                      items: { $ref: "#/components/schemas/Product" },
                    },
                  },
                  example: {
                    status: 200,
                    success: true,
                    message: "상품 검색 성공",
                    data: [
                      {
                        id: 3,
                        name: "optimizing",
                        price: 50307,
                        productImages: [
                          "https://picsum.photos/300/300?random=172",
                          "https://picsum.photos/300/300?random=29",
                          "https://picsum.photos/300/300?random=234",
                        ],
                        isDiscounted: true,
                        discountAmount: 94542,
                      },
                      {
                        id: 12,
                        name: "programming",
                        price: 17068,
                        productImages: [
                          "https://picsum.photos/300/300?random=891",
                          "https://picsum.photos/300/300?random=400",
                          "https://picsum.photos/300/300?random=577",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                      {
                        id: 18,
                        name: "West Virginia",
                        price: 45087,
                        productImages: [
                          "https://picsum.photos/300/300?random=934",
                          "https://picsum.photos/300/300?random=975",
                          "https://picsum.photos/300/300?random=390",
                        ],
                        isDiscounted: true,
                        discountAmount: 69735,
                      },
                    ],
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/products/{productId}": {
      get: {
        tags: ["Products"],
        summary: "Get product Detail by ID",
        parameters: [{ $ref: "#/components/parameters/productId" }],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "상품 상세정보 조회 성공.",
                    data: {
                      id: 1,
                      name: "Programmable",
                      price: 39729,
                      productImages: [
                        "https://picsum.photos/300/300?random=153",
                        "https://picsum.photos/300/300?random=746",
                        "https://picsum.photos/300/300?random=413",
                      ],
                      isDiscounted: true,
                      discountAmount: 86353,
                      shippingCost: 5666,
                      group: "a",
                      isAvailable: true,
                      quantityAvailable: 94,
                      productOptions: [
                        {
                          id: 1,
                          name: "Direct",
                          optionChoices: [
                            {
                              id: 1,
                              name: "Ferry",
                            },
                            {
                              id: 2,
                              name: "quantifying",
                            },
                            {
                              id: 3,
                              name: "Gloves",
                            },
                            {
                              id: 4,
                              name: "solution",
                            },
                            {
                              id: 5,
                              name: "virtual",
                            },
                          ],
                        },
                        {
                          id: 2,
                          name: "Dynamic",
                          optionChoices: [
                            {
                              id: 6,
                              name: "turquoise",
                            },
                            {
                              id: 7,
                              name: "web-readiness",
                            },
                            {
                              id: 8,
                              name: "lime",
                            },
                            {
                              id: 9,
                              name: "black",
                            },
                            {
                              id: 10,
                              name: "scale",
                            },
                          ],
                        },
                        {
                          id: 3,
                          name: "Triple-buffered",
                          optionChoices: [
                            {
                              id: 11,
                              name: "withdrawal",
                            },
                            {
                              id: 12,
                              name: "bus",
                            },
                            {
                              id: 13,
                              name: "Configuration",
                            },
                            {
                              id: 14,
                              name: "1080p",
                            },
                            {
                              id: 15,
                              name: "Intelligent",
                            },
                          ],
                        },
                        {
                          id: 4,
                          name: "cutting-edge",
                          optionChoices: [
                            {
                              id: 16,
                              name: "payment",
                            },
                            {
                              id: 17,
                              name: "even-keeled",
                            },
                            {
                              id: 18,
                              name: "online",
                            },
                            {
                              id: 19,
                              name: "Garden",
                            },
                            {
                              id: 20,
                              name: "Technician",
                            },
                          ],
                        },
                        {
                          id: 5,
                          name: "Home",
                          optionChoices: [
                            {
                              id: 21,
                              name: "Investment Account",
                            },
                            {
                              id: 22,
                              name: "Shoes",
                            },
                            {
                              id: 23,
                              name: "synergies",
                            },
                            {
                              id: 24,
                              name: "Cambridgeshire",
                            },
                            {
                              id: 25,
                              name: "Hryvnia",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_PRODUCT_DETAIL_SUCCESS,
                    },
                    data: {
                      $ref: "#/components/schemas/Product",
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/products/{productId}/bundle": {
      get: {
        tags: ["Products"],
        summary: "Get bundle products of the given product",
        parameters: [{ $ref: "#/components/parameters/productId" }],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "묶음배송 상품 조회 성공.",
                    data: [
                      {
                        id: 6,
                        name: "grey",
                        price: 52456,
                        productImages: [
                          "https://picsum.photos/300/300?random=724",
                          "https://picsum.photos/300/300?random=610",
                          "https://picsum.photos/300/300?random=100",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                      {
                        id: 8,
                        name: "Handcrafted",
                        price: 18263,
                        productImages: [
                          "https://picsum.photos/300/300?random=335",
                          "https://picsum.photos/300/300?random=914",
                          "https://picsum.photos/300/300?random=372",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                      {
                        id: 13,
                        name: "application",
                        price: 48738,
                        productImages: [
                          "https://picsum.photos/300/300?random=965",
                          "https://picsum.photos/300/300?random=267",
                          "https://picsum.photos/300/300?random=886",
                        ],
                        isDiscounted: false,
                        discountAmount: 0,
                      },
                    ],
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_BUNDLE_PRODUCTS_SUCCESS,
                    },
                    data: {
                      type: "array",
                      items: { $ref: "#/components/schemas/Product" },
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/products/{productId}/reviews": {
      get: {
        tags: ["Products"],
        summary: "Get approved reviews of the given product",
        parameters: [{ $ref: "#/components/parameters/productId" }],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "해당 상품의 리뷰 조회 성공",
                    data: {
                      reviewCount: 3,
                      reviews: [
                        {
                          id: 71,
                          stars: 3,
                          content:
                            "Quia eaque quaerat est officia in ut odit voluptatem.",
                          createdAt: "2021-02-06T17:03:26.979Z",
                          approvedAt: "2021-01-23",
                          reviewImages: [
                            "https://picsum.photos/300/300?random=676",
                            "https://picsum.photos/300/300?random=857",
                            "https://picsum.photos/300/300?random=633",
                          ],
                          user: {
                            id: 8,
                            name: "Lindsey_Sawayn59",
                          },
                        },
                        {
                          id: 239,
                          stars: 4,
                          content:
                            "Sunt assumenda expedita nihil eligendi cum recusandae occaecati.",
                          createdAt: "2021-02-06T17:03:27.294Z",
                          approvedAt: "2021-01-07",
                          reviewImages: [
                            "https://picsum.photos/300/300?random=810",
                            "https://picsum.photos/300/300?random=916",
                            "https://picsum.photos/300/300?random=857",
                          ],
                          user: {
                            id: 3,
                            name: "Sarai_Roob83",
                          },
                        },
                        {
                          id: 251,
                          stars: 1,
                          content:
                            "Error perspiciatis qui veritatis iure temporibus.",
                          createdAt: "2021-02-06T17:03:27.312Z",
                          approvedAt: "2021-01-21",
                          reviewImages: [
                            "https://picsum.photos/300/300?random=512",
                            "https://picsum.photos/300/300?random=289",
                            "https://picsum.photos/300/300?random=412",
                          ],
                          user: {
                            id: 5,
                            name: "Reva.Skiles62",
                          },
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_PRODUCT_REVIEWS_SUCCESS,
                    },
                    data: {
                      type: "object",
                      properties: {
                        reviewCount: {
                          type: "integer",
                          example: 5,
                        },
                        reviews: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/Review",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/products/category/{categoryId}": {
      get: {
        tags: ["Products"],
        summary: "Get products with the given category",
        parameters: [{ $ref: "#/components/parameters/categoryId" }],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "해당 카테고리에 해당하는 상품들 조회 성공",
                    data: {
                      productCount: 27,
                      products: [
                        {
                          id: 7,
                          name: "Metrics",
                          price: 56336,
                          productImages: [
                            "https://picsum.photos/300/300?random=973",
                            "https://picsum.photos/300/300?random=309",
                            "https://picsum.photos/300/300?random=556",
                          ],
                          isDiscounted: true,
                          discountAmount: 82320,
                          subcategory: {
                            id: 3,
                            name: "미니아트시그니처",
                          },
                          topics: [
                            {
                              id: 1,
                              name: "심플",
                            },
                            {
                              id: 3,
                              name: "큐트",
                            },
                            {
                              id: 4,
                              name: "어반",
                            },
                            {
                              id: 5,
                              name: "자연",
                            },
                            {
                              id: 7,
                              name: "동물",
                            },
                          ],
                        },
                        {
                          id: 18,
                          name: "West Virginia",
                          price: 45087,
                          productImages: [
                            "https://picsum.photos/300/300?random=934",
                            "https://picsum.photos/300/300?random=975",
                            "https://picsum.photos/300/300?random=390",
                          ],
                          isDiscounted: true,
                          discountAmount: 69735,
                          subcategory: {
                            id: 1,
                            name: "아트시그니처",
                          },
                          topics: [
                            {
                              id: 1,
                              name: "심플",
                            },
                            {
                              id: 5,
                              name: "자연",
                            },
                            {
                              id: 6,
                              name: "음식",
                            },
                            {
                              id: 7,
                              name: "동물",
                            },
                            {
                              id: 8,
                              name: "인물",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    message: {
                      type: "string",
                      default:
                        responseMessage.GET_PRODUCTS_WITH_GIVEN_CATEGORY_SUCCESS,
                    },
                    data: {
                      type: "array",
                      items: {
                        $ref:
                          "#/components/schemas/ProductWithSubcategoriesAndTopics",
                      },
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/products/subcategory/{subcategoryId}": {
      get: {
        tags: ["Products"],
        summary: "Get products with the given subcategory",
        parameters: [{ $ref: "#/components/parameters/subcategoryId" }],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "해당 서브카테고리에 해당하는 상품들 조회 성공",
                    data: [
                      {
                        id: 18,
                        name: "West Virginia",
                        price: 45087,
                        productImages: [
                          "https://picsum.photos/300/300?random=934",
                          "https://picsum.photos/300/300?random=975",
                          "https://picsum.photos/300/300?random=390",
                        ],
                        isDiscounted: true,
                        discountAmount: 69735,
                        topics: [
                          {
                            id: 1,
                            name: "심플",
                          },
                          {
                            id: 5,
                            name: "자연",
                          },
                          {
                            id: 6,
                            name: "음식",
                          },
                          {
                            id: 7,
                            name: "동물",
                          },
                          {
                            id: 8,
                            name: "인물",
                          },
                        ],
                      },
                      {
                        id: 24,
                        name: "Practical Frozen Towels",
                        price: 43149,
                        productImages: [
                          "https://picsum.photos/300/300?random=62",
                          "https://picsum.photos/300/300?random=721",
                          "https://picsum.photos/300/300?random=757",
                        ],
                        isDiscounted: true,
                        discountAmount: 72566,
                        topics: [
                          {
                            id: 1,
                            name: "심플",
                          },
                          {
                            id: 2,
                            name: "위트",
                          },
                          {
                            id: 3,
                            name: "큐트",
                          },
                          {
                            id: 4,
                            name: "어반",
                          },
                          {
                            id: 5,
                            name: "자연",
                          },
                        ],
                      },
                      {
                        id: 27,
                        name: "Money Market Account",
                        price: 35769,
                        productImages: [
                          "https://picsum.photos/300/300?random=914",
                          "https://picsum.photos/300/300?random=433",
                          "https://picsum.photos/300/300?random=962",
                        ],
                        isDiscounted: true,
                        discountAmount: 45509,
                        topics: [
                          {
                            id: 1,
                            name: "심플",
                          },
                          {
                            id: 2,
                            name: "위트",
                          },
                          {
                            id: 3,
                            name: "큐트",
                          },
                          {
                            id: 5,
                            name: "자연",
                          },
                          {
                            id: 7,
                            name: "동물",
                          },
                        ],
                      },
                    ],
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    message: {
                      type: "string",
                      default:
                        responseMessage.GET_PRODUCTS_WITH_GIVEN_SUBCATEGORY_SUCCESS,
                    },
                    data: {
                      type: "array",
                      items: { $ref: "#/components/schemas/ProductWithTopics" },
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/categories": {
      get: {
        tags: ["Categories"],
        summary: "Get All Categories with subcategories included",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "모든 카테고리 조회 성공",
                    data: [
                      {
                        id: 1,
                        name: "아트워크",
                        subcategories: [
                          {
                            id: 1,
                            name: "아트시그니처",
                            productCount: 8,
                          },
                          {
                            id: 2,
                            name: "아트포스터",
                            productCount: 8,
                          },
                          {
                            id: 3,
                            name: "미니아트시그니처",
                            productCount: 11,
                          },
                        ],
                      },
                      {
                        id: 2,
                        name: "굿즈",
                        subcategories: [
                          {
                            id: 4,
                            name: "콜라보레이션 굿즈",
                            productCount: 12,
                          },
                          {
                            id: 5,
                            name: "컬러링",
                            productCount: 6,
                          },
                          {
                            id: 6,
                            name: "폰케이스",
                            productCount: 13,
                          },
                          {
                            id: 7,
                            name: "노트",
                            productCount: 12,
                          },
                          {
                            id: 8,
                            name: "포스트카드",
                            productCount: 9,
                          },
                          {
                            id: 9,
                            name: "키톡",
                            productCount: 7,
                          },
                          {
                            id: 10,
                            name: "뱃지",
                            productCount: 14,
                          },
                        ],
                      },
                    ],
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_ALL_CATEGORIES_SUCCESS,
                    },
                    data: {
                      type: "array",
                      items: { $ref: "#/components/schemas/Category" },
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#/components/responses/InternalServerError",
          },
        },
      },
    },
    "/users": {
      post: {
        tags: ["Users"],
        summary:
          "Create a user. Generates a jwt accessToken and returns it along with the created user information on success",
        requestBody: {
          $ref: "#components/requestBodies/CreateUser",
        },
        responses: {
          200: {
            description: "OK",
            headers: {
              $ref: "#/components/headers/AuthorizationTokenCookie",
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.CREATE_USER_SUCCESS,
                    },
                    data: {
                      type: "object",
                      example: {
                        status: 200,
                        success: true,
                        message: "유저 생성 성공",
                        data: {
                          name: "Wooyeong",
                          email: "kimwy1997@gmail.com",
                          gender: "남자",
                          address: "758 Winfield Pike",
                          birthdate: "1997-03-06",
                          phoneNumber: "01021227842",
                          socialIssues: [
                            {
                              id: 4,
                              name: "성차별",
                            },
                            {
                              id: 2,
                              name: "환경",
                            },
                            {
                              id: 7,
                              name: "난민",
                            },
                          ],
                          id: 13,
                          mileage: 0,
                          createdAt: "2021-02-06T17:12:02.947Z",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          409: {
            description: "User Already Exists",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    status: 409,
                    success: false,
                    message: "이미 있는 유저입니다",
                  },
                },
              },
            },
          },
          404: {
            description: "Social Issue Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    success: {
                      type: "boolean",
                      default: false,
                    },
                    message: {
                      type: "string",
                    },
                  },
                  example: {
                    status: 404,
                    success: false,
                    message: "해당하는 사회 이슈가 없습니다.",
                  },
                },
              },
            },
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/users/check-duplicate": {
      post: {
        tags: ["Users"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  email: "Harmon99@gmail.com",
                },
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    required: true,
                    format: "email",
                  },
                },
              },
            },
          },
        },
        summary: "Check if a user with the given email exists.",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    status: 200,
                    success: true,
                    message: "해당 이메일을 가진 유저가 없습니다",
                  },
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.EMAIL_AVAILABLE,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          409: {
            description: "Email already taken",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    status: 200,
                    success: true,
                    message: "이미 있는 유저입니다",
                  },
                },
              },
            },
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/users/login": {
      post: {
        tags: ["Users"],
        summary:
          "Login User with email and password. Generates a jwt accessToken and returns it along with logged in user information on success",
        requestBody: {
          $ref: "#/components/requestBodies/LoginUser",
        },
        responses: {
          200: {
            description: "OK",
            headers: {
              $ref: "#/components/headers/AuthorizationTokenCookie",
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.LOGIN_SUCCESS,
                    },
                    data: {
                      type: "object",
                      example: {
                        status: 200,
                        success: true,
                        message: "로그인 성공",
                        data: {
                          id: 1,
                          name: "Cathrine.Bosco72",
                          email: "Merle.Pouros40@yahoo.com",
                          gender: "여자",
                          address: "322 Graham Row",
                          birthdate: "2020-03-01",
                          phoneNumber: "01041936370",
                          mileage: 1071,
                          createdAt: "2021-02-06T17:03:17.095Z",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: "#/components/responses/WrongCredentials" },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    // "/users/logout": {
    //   post: {
    //     tags: ["Users"],
    //     summary: "Delete Authorization Token Cookie",
    //     responses: {
    //       200: {
    //         description: "OK",
    //         content: {
    //           "application/json": {
    //             schema: {
    //               type: "object",
    //               properties: {
    //                 status: {
    //                   type: "integer",
    //                   default: statusCode.OK,
    //                 },
    //                 success: {
    //                   type: "boolean",
    //                   default: true,
    //                 },
    //                 message: {
    //                   type: "string",
    //                   default: responseMessage.LOGOUT_SUCCESS,
    //                 },
    //                 data: {
    //                   type: "object",
    //                   example: {
    //                     status: 200,
    //                     success: true,
    //                     message: "유저 로그아웃 성공",
    //                   },
    //                 },
    //               },
    //             },
    //           },
    //         },
    //       },
    //       500: {
    //         $ref: "#components/responses/InternalServerError",
    //       },
    //     },
    //   },
    // },
    "/users/user-info": {
      put: {
        tags: ["Users"],
        security: [{ jwtAuth: [] }],
        summary:
          "Update User info. Address, birthdate, gender, and social issues can be changed.",
        requestBody: { $ref: "#components/requestBodies/UpdateUserInfo" },
        responses: {
          200: {
            description: "OK",
            headers: {
              $ref: "#/components/headers/AuthorizationTokenCookie",
            },
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "유저 정보 수정 성공",
                    data: {
                      id: 1,
                      name: "Cathrine.Bosco72",
                      email: "Merle.Pouros40@yahoo.com",
                      gender: "male",
                      address: "new ",
                      birthdate: "2020-03-01",
                      phoneNumber: "01041936370",
                      mileage: 1071,
                      createdAt: "2021-02-06T17:03:17.095Z",
                      socialIssues: [
                        {
                          id: 1,
                          name: "장애인",
                        },
                        {
                          id: 2,
                          name: "환경",
                        },
                        {
                          id: 7,
                          name: "난민",
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.UPDATE_USER_INFO_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          404: {
            description: "Social Issue Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    success: {
                      type: "boolean",
                      default: false,
                    },
                    message: {
                      type: "string",
                    },
                  },
                  example: {
                    status: 404,
                    success: false,
                    message: "해당하는 사회 이슈가 없습니다.",
                  },
                },
              },
            },
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/users/password": {
      put: {
        tags: ["Users"],
        security: [{ jwtAuth: [] }],
        summary: "Update User Password.",
        requestBody: { $ref: "#components/requestBodies/UpdateUserPassword" },
        responses: {
          200: {
            description: "OK",
            headers: {
              $ref: "#/components/headers/AuthorizationTokenCookie",
            },
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "유저 비밀번호 수정 성공",
                    data: {
                      id: 1,
                      name: "Cathrine.Bosco72",
                      email: "Merle.Pouros40@yahoo.com",
                      gender: "male",
                      address: "new ",
                      birthdate: "2020-03-01",
                      phoneNumber: "01041936370",
                      mileage: 1071,
                      createdAt: "2021-02-06T17:03:17.095Z",
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.UPDATE_USER_PASSWORD_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage": {
      get: {
        security: [{ jwtAuth: [] }],
        summary:
          "Get information needed for mypage landing. This includes username, issuedcouponeCount, and mileage points.",
        tags: ["Mypage"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "유저 정보 조회 성공",
                    data: {
                      username: "Cathrine.Bosco72",
                      issuedcouponCount: 2,
                      mileage: 1071,
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_MYPAGE_INFO_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/coupons": {
      get: {
        security: [{ jwtAuth: [] }],
        summary: "Get information about coupons owned by the logged in user.",
        tags: ["Mypage"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지 쿠폰 정보 조회 성공",
                    data: [
                      {
                        name: "index",
                        discountAmount: 5545,
                        discountRate: null,
                        minimumOrderAmount: 32231,
                        issuedDate: "2021-02-06T19:45:25.440Z",
                        expirationDate: "2021-08-29T16:33:48.000Z",
                      },
                      {
                        name: "e-business",
                        discountAmount: null,
                        discountRate: "48%",
                        minimumOrderAmount: 44375,
                        issuedDate: "2021-02-06T19:45:25.448Z",
                        expirationDate: "2021-08-27T05:55:10.000Z",
                      },
                      {
                        name: "Sleek Frozen Pants",
                        discountAmount: null,
                        discountRate: "14%",
                        minimumOrderAmount: 29002,
                        issuedDate: "2021-02-06T19:45:25.455Z",
                        expirationDate: "2021-03-29T12:03:55.000Z",
                      },
                    ],
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_MYPAGE_COUPONS_INFO_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
      post: {
        security: [{ jwtAuth: [] }],
        summary: "Issue a coupon with coupon code for the logged in user.",
        tags: ["Mypage"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  code: "21881c19-99ec-4e92-9362-e385e2764904",
                },
                type: "object",
                properties: {
                  code: {
                    type: "string",
                    required: true,
                    format: "uuid",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지에서 쿠폰 발급 성공",
                    data: {
                      code: "21881c19-99ec-4e92-9362-e385e2764904",
                      expirationDate: "2021-10-09T23:37:14.000Z",
                      issuedDate: "2021-02-06T19:49:46.021Z",
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.MYPAGE_ISSUE_COUPON_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          409: {
            description: "User Already Has This Coupon",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    status: 409,
                    success: false,
                    message:
                      "이 유저는 이미 해당 코드를 갖고 있는 쿠폰을 발급받았습니다",
                  },
                },
              },
            },
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/mileage": {
      get: {
        security: [{ jwtAuth: [] }],
        summary: "Get information about mileage owned by the logged in user.",
        tags: ["Mypage"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지 마일리지 정보 조회 성공",
                    data: 1071,
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_MYPAGE_MILEAGE_INFO_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/orders": {
      get: {
        security: [{ jwtAuth: [] }],
        summary: "Get information about orders made by the logged in user.",
        tags: ["Mypage"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지 주문 정보 조회 성공",
                    data: [
                      {
                        orderNumber: "034c0af1-292c-41e7-afc3-f6599f65d277",
                        orderDateTime: "2020-04-22T20:42:48.000Z",
                        firstProductImage:
                          "https://picsum.photos/300/300?random=203",
                        firstProductName: "Borders",
                        totalCost: 37193,
                      },
                      {
                        orderNumber: "04a4417f-f90d-4ab6-a7de-9c0c5b3c0767",
                        orderDateTime: "2020-10-11T03:58:57.000Z",
                        firstProductImage:
                          "https://picsum.photos/300/300?random=439",
                        firstProductName: "Checking Account",
                        totalCost: 158862,
                      },
                      {
                        orderNumber: "151d413b-c967-41ac-93ee-7b2abc2a41f0",
                        orderDateTime: "2020-02-14T17:07:39.000Z",
                        firstProductImage:
                          "https://picsum.photos/300/300?random=52",
                        firstProductName: "Chips",
                        totalCost: 129311,
                      },
                    ],
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_MYPAGE_ORDERS_INFO_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/orders/{orderNumber}": {
      get: {
        security: [{ jwtAuth: [] }],
        summary: "Get order detail by orderNumber.",
        tags: ["Mypage"],
        parameters: [
          {
            $ref: "#/components/parameters/orderNumber",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지 주문 상세 조회 성공",
                    data: {
                      orderDateTime: "2020-04-22T20:42:48.000Z",
                      orderNumber: "034c0af1-292c-41e7-afc3-f6599f65d277",
                      paymentStatus: "결제대기",
                      shippingStatus: null,
                      receiverName: "Terry",
                      receiverAddress: "29748 Smitham Brooks",
                      receiverPhoneNumber: "01096085704",
                      totalCost: 37193,
                      totalCouponDiscountAmount: 3632,
                      totalMileageUsageAmount: 1938,
                      shippingCost: 40782,
                      orderProducts: [
                        {
                          productName: "Borders",
                          productImage:
                            "https://picsum.photos/300/300?random=203",
                          productPrice: 37193,
                          discountAmount: 67686,
                          productOption: "Borders",
                          quantity: 8,
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_MYPAGE_ORDER_DETAIL_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "Order Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    success: {
                      type: "boolean",
                      default: false,
                    },
                    message: {
                      type: "string",
                    },
                  },
                  example: {
                    status: 404,
                    success: false,
                    message: "해당 주문번호를 가진 주문이 없습니다",
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/reviews": {
      get: {
        security: [{ jwtAuth: [] }],
        summary: "Get information about reviws written by the logged in user.",
        tags: ["Mypage"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지 리뷰 정보 조회 성공",
                    data: {
                      reviewCount: 17,
                      reviewsInfo: [
                        {
                          productName: "Applications",
                          productOption: "Steel",
                          productImage:
                            "https://picsum.photos/300/300?random=181",
                          orderDateTime: "2020-03-25T07:56:49.000Z",
                          reviewImage:
                            "https://picsum.photos/300/300?random=496",
                          reviewStars: 1.5,
                          reviewContent:
                            "Error amet quis omnis impedit occaecati aliquid officia.",
                          reviewCreatedAt: "2021-02-06T17:03:26.974Z",
                          username: "Cathrine.Bosco72",
                        },
                        {
                          productName: "application",
                          productOption: "Tactics",
                          productImage:
                            "https://picsum.photos/300/300?random=965",
                          orderDateTime: "2020-09-24T07:29:39.000Z",
                          reviewImage:
                            "https://picsum.photos/300/300?random=315",
                          reviewStars: 4,
                          reviewContent:
                            "Commodi molestias soluta sed enim itaque voluptatem.",
                          reviewCreatedAt: "2021-02-06T17:03:27.034Z",
                          username: "Cathrine.Bosco72",
                        },
                        {
                          productName: "invoice",
                          productOption: "Car",
                          productImage:
                            "https://picsum.photos/300/300?random=582",
                          orderDateTime: "2020-11-23T21:06:45.000Z",
                          reviewImage:
                            "https://picsum.photos/300/300?random=721",
                          reviewStars: 4.5,
                          reviewContent: "Voluptas eaque iste repellendus et.",
                          reviewCreatedAt: "2021-02-06T17:03:27.053Z",
                          username: "Cathrine.Bosco72",
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_MYPAGE_REVIEWS_INFO_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
      // TODO: image file
      post: {
        security: [{ jwtAuth: [] }],
        summary: "Write a review",
        tags: ["Mypage"],
        requestBody: {
          description: "Data needed to write a review",
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                example: {
                  code: "21881c19-99ec-4e92-9362-e385e2764904",
                },
                type: "object",
                properties: {
                  stars: {
                    type: "number",
                    format: "float",
                    required: true,
                    example: 1.5,
                  },
                  content: {
                    type: "string",
                    required: true,
                    example: "This product is hilarious!",
                  },
                  productId: {
                    type: "integer",
                    required: true,
                    example: 52,
                  },
                  orderProductId: {
                    type: "integer",
                    required: true,
                    example: 483,
                  },
                  imageFiles: {
                    // type: "string",
                    // format: "base64",
                    type: "array",
                    items: {
                      type: "string",
                      format: "binary",
                      required: false,
                    },
                  },
                },
              },
              // encoding: {
              //   imageFiles: {
              //     contentType: "image/png",
              //   },
              // },
            },
          },
        },
        responses: {
          200: {
            summary: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "마이페이지에서 리뷰 작성 성공",
                    data: {
                      userId: 1,
                      productId: "52",
                      stars: 1.5,
                      content: "This product is hilarious!",
                      reviewImages: [
                        "https://sopt-27-wooyeong.s3.ap-northeast-2.amazonaws.com/kimu/users/reviewImage/1612691740636.jpg",
                        "https://sopt-27-wooyeong.s3.ap-northeast-2.amazonaws.com/kimu/users/reviewImage/1612691740637.jpeg",
                      ],
                      orderProduct: "483",
                      approvedAt: null,
                      id: 376,
                      createdAt: "2021-02-07T09:55:40.813Z",
                      isApproved: false,
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.MYPAGE_ISSUE_COUPON_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          409: {
            description:
              "This user has already written a review on this ordered product",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    status: 409,
                    success: false,
                    message: "해당 주문상품에 대해 이미 리뷰를 작성했습니다.",
                  },
                },
              },
            },
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/ordered-products-without-review": {
      get: {
        security: [{ jwtAuth: [] }],
        summary: "Get ordered products of the logged in user without review.",
        tags: ["Mypage"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message:
                      "마이페이지에서 리뷰를 작성하지 않은 주문한 상품들 조회 성공",
                    data: {
                      productCount: 34,
                      orderProductsWithoutReviewsInfo: [
                        {
                          productId: 9,
                          productName: "Borders",
                          productImage:
                            "https://picsum.photos/300/300?random=203",
                          productOption: "Borders",
                          orderDateTime: "2020-04-22T20:42:48.000Z",
                          orderProductId: 80,
                        },
                        {
                          productId: 49,
                          productName: "Organic",
                          productImage:
                            "https://picsum.photos/300/300?random=437",
                          productOption: "Handcrafted Rubber Computer",
                          orderDateTime: "2020-10-11T03:58:57.000Z",
                          orderProductId: 334,
                        },
                        {
                          productId: 70,
                          productName: "De-engineered",
                          productImage:
                            "https://picsum.photos/300/300?random=551",
                          productOption: "deposit",
                          orderDateTime: "2020-09-20T21:43:41.000Z",
                          orderProductId: 442,
                        },
                      ],
                    },
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default:
                        responseMessage.GET_MYPAGE_ORDERPRODUCTS_WITHOUT_REVIEWS_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#components/responses/Unauthorized",
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/mypage/confirm-user": {
      post: {
        tags: ["Mypage"],
        summary: "Confirm user with email and password",
        requestBody: {
          $ref: "#/components/requestBodies/LoginUser",
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.CONFIRM_USER_SUCCESS,
                    },
                    data: {
                      type: "object",
                      example: {
                        status: 200,
                        success: true,
                        message: "유저 확인 성공",
                        data: {
                          id: 1,
                          name: "Zella.Larkin",
                          email: "Kathlyn.Graham13@hotmail.com",
                          gender: "남자",
                          address: "05221 Sawayn Tunnel",
                          birthdate: "2020-09-01",
                          phoneNumber: "01095160182",
                          mileage: 1811,
                          createdAt: "2021-02-06T19:45:25.313Z",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: "#/components/responses/WrongCredentials" },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
    "/social-issues": {
      get: {
        summary: "Get all social issues",
        tags: ["Social Issues"],
        responses: {
          200: {
            decription: "OK",
            content: {
              "application/json": {
                schema: {
                  example: {
                    status: 200,
                    success: true,
                    message: "모든 관심사회 이슈 불러오기 성공",
                    data: [
                      {
                        id: 1,
                        name: "장애인",
                      },
                      {
                        id: 2,
                        name: "환경",
                      },
                      {
                        id: 3,
                        name: "아동학대",
                      },
                      {
                        id: 4,
                        name: "성차별",
                      },
                      {
                        id: 5,
                        name: "인종차별",
                      },
                      {
                        id: 6,
                        name: "노인차별",
                      },
                      {
                        id: 7,
                        name: "난민",
                      },
                      {
                        id: 8,
                        name: "빈곤",
                      },
                      {
                        id: 9,
                        name: "취약계층\n아동자립",
                      },
                      {
                        id: 10,
                        name: "북한인권",
                      },
                      {
                        id: 11,
                        name: "미혼모/부",
                      },
                      {
                        id: 12,
                        name: "과거사",
                      },
                    ],
                  },
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                      default: statusCode.OK,
                    },
                    success: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                      default: responseMessage.GET_ALL_SOCIAL_ISSUES_SUCCESS,
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          500: {
            $ref: "#components/responses/InternalServerError",
          },
        },
      },
    },
  },
};

export default swaggerDocs;
